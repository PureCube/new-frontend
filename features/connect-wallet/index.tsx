import { web3Store } from "entities/wallet";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Button } from "shared/ui";
import {Account} from "@near-wallet-selector/core";
import "@near-wallet-selector/modal-ui/styles.css";

export interface ConnectWalletProps {
	children: string,
}

export const ConnectWallet = observer( ({children}: ConnectWalletProps) => {
	const [walletModal, setWalletModal] = useState(false)
  const [account, setAccount] = useState<Account>()

  useEffect(() => {
    const a = async() => {
      await web3Store.init()
      if (web3Store.account) {
        setAccount(web3Store.account)
      }
    }
    a()
  }, [])

  const connectWallet = () => {
    web3Store.modal?.show()
  }

  const disconnectWallet = async () => {
    await web3Store.disconnect()
    setWalletModal(false)
    setAccount(undefined)
  }

	return (
		<Button onClick={connectWallet}>{children}</Button>
	)
})
