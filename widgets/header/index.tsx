import { UserAvatar } from "entities/user";
import { ConnectWallet } from "features/connect-wallet";
import Image from "next/image";
import Link from "next/link";

export interface HeaderProps {
	navbar: JSX.Element,
}

export const Header = ({navbar}: HeaderProps) => {
	return (
		<header className="bg-white">

			<Link href="/">
				<div className="relative h-12 w-20 md:w-24">
					<Image src="/logo.svg" layout="fill" alt="logo" />
				</div>
			</Link>

			{navbar}

			<ConnectWallet>Connect wallet</ConnectWallet>
			<UserAvatar />

		</header>
	)
}
