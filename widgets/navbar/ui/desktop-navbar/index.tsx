import { NavbarDropdown } from "../navbar-dropdown";
import Link from "next/link";

export const DesktopNavbar = () => {
	return (
		<nav className="hidden lg:block">
			<ul className="flex justify-center items-center space-x-10 font-body-semibold">

				<li className="hover:underline">
					<Link href="/games">Games</Link>
				</li>

				<li className="hover:underline">
					<Link href="/about">About</Link>
				</li>

				<li className="hover:underline">
					<NavbarDropdown
						title="Projects"
						items={[
							{
								title: "NFT Collections",
								body: "NFTs provide the ultimate play & earn experience in PureCube ecosystem",
								link: "/platform",
								icon: "/icons/dropdown-platform.png",
							},
							{
								title: "Marketplace",
								body: "PureCube’s marketplace infrastructure is purpose-built for blockchain games",
								link: "/marketplace",
								icon: "/icons/dropdown-marketplace.png",
							},
							{
								title: "Token",
								body: "Crypto-token serves as fuel to all processes in the PureCube ecosystem",
								link: "/token",
								icon: "/icons/dropdown-token.png",
							},
						]}
					/>
				</li>

			</ul>
		</nav>
	)
}
