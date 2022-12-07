import { UserAvatar } from "entities/user";
import { ConnectWallet } from "features/connect-wallet";
import Image from "next/image";
import Link from "next/link";

export interface HeaderProps {
	navbar: JSX.Element,
}

export const Header = ({navbar}: HeaderProps) => {
	return (
		<header className="flex justify-between items-center py-3 md:py-5 select-none">

			<Link href="/">
				<div className="relative h-12 w-20 md:w-24">
					<Image src="/logo.svg" layout="fill" alt="logo" />
				</div>
			</Link>

			{navbar}

			<div className="hidden lg:flex items-center space-x-5">
				<ConnectWallet>Connect wallet</ConnectWallet>
				<UserAvatar size={45} />
			</div>

		</header>
	)
}
