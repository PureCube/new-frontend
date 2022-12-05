import { Button } from "shared/ui";

export interface ConnectWalletProps {
	children: string,
}

export const ConnectWallet = ({children}: ConnectWalletProps) => {
	return (
		<Button>{children}</Button>
	)
}
