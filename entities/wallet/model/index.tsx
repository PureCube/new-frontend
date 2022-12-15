import {Account, NetworkId, setupWalletSelector, WalletSelector} from "@near-wallet-selector/core";
import { setupModal, WalletSelectorModal } from "@near-wallet-selector/modal-ui";
import { setupDefaultWallets } from "@near-wallet-selector/default-wallets";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";

import {makeAutoObservable, action} from 'mobx';
import {setupMeteorWallet} from "@near-wallet-selector/meteor-wallet";

class Web3Store {
    initStart = false
    account?: Account
    selector?: WalletSelector
    modal?:WalletSelectorModal
    network: NetworkId = "testnet"

    constructor() {
        makeAutoObservable(this, {
            initAccount: action.bound,
        })
    }

    async disconnect() {
        await (await this.selector?.wallet())?.signOut()
        this.account = undefined
    }

    init = async () => {
        if (!this.initStart && typeof window !== "undefined") {
            // console.log('web3store init')
            this.initStart = true

            this.selector = await setupWalletSelector({
                network: this.network,
                modules: [
                    ...(await setupDefaultWallets()),
                    setupNearWallet(),
                    setupMyNearWallet(),
                    setupMeteorWallet(),
                    setupWalletConnect({
                        projectId: "c4f79cc...",
                        metadata: {
                            name: "PureBlock",
                            description: "PureBlock app",
                            url: "https://pureblock.io",
                            icons: ["https://pureblock.io/logo.svg"],
                        },
                    }),
                ],
            });

            this.modal = setupModal(this.selector, {
                contractId: "pureblock.testnet",
                theme: 'dark',
                description: '',
            });

            await this.initAccount()
        }
    }

    async initAccount() {
        // console.log('initAccount')
        if (this.selector?.isSignedIn()) {
            // console.log('initAccount isSignedIn()')
            const wallet = await this.selector?.wallet()
            // console.log('initAccount  wallet', wallet)
            if (wallet) {
                const accounts = await (await this.selector?.wallet()).getAccounts()
                // console.log('initAccount accounts', accounts)
                if (accounts.length > 0 && accounts[0]) {
                    this.account = accounts[0]
                    // console.log('initAccount account', this.account)
                    // return accounts[0]
                }
            }
        }
    }
}

export const web3Store = new Web3Store()
