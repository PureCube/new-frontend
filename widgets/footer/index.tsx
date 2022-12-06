import { FooterLinksCard } from "./ui/footer-links-card";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer className="flex flex-wrap flex-col border-neutral-600 border-t py-3 md:py-5 space-y-14 select-none">
			<div className="flex flex-col items-start justify-between md:flex-row md:flex-wrap gap-14 md:gap-x-22">

			<Link href="/">
				<div className="relative h-20 w-24 md:w-36">
					<Image src="/logo.svg" layout="fill" alt="logo" />
				</div>
			</Link>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-14 md:gap-22">
					<FooterLinksCard
						title="Explore"
						elems={[
							{
								title: "Our Games",
								link: "/games"
							},
							{
								title: "Ecosystem",
								link: "/ecosystem",
								soon: true,
							},
							{
								title: "Token",
								link: "/token",
							},
						]}
					/>
					<FooterLinksCard
						title="General"
						elems={[
							{
								title: "About Us",
								link: "/about",
							},
							{
								title: "Careers",
								soon: true,
							},
							{
								title: "Media Kit",
								link: "https://drive.google.com/drive/folders/1GEAxFFx19MeGGVdqpw-sR7zRhaHs1_iy?usp=sharing",
								target: "_blank",
							},
							{
								title: "Contact Us",
								link: "mailto:hello@pureblock.io",
								target: "_blank",
							},
						]}
					/>
					<FooterLinksCard
						title="Learn"
						elems={[
							{
								title: "Whitepaper",
								soon: true,
							},
							{
								title: "Medium",
								link: "https://medium.com/@pureblock",
								target: "_blank",
							},
							{
								title: "Github",
								link: "https://github.com/purecube",
								target: "_blank",
							},
						]}
					/>
					<FooterLinksCard
						title="Social"
						elems={[
							{
								title: "Twitter",
								link: "https://twitter.com/purecube_io",
								target: "_blank",
								icon: "twitter",
							},
							{
								title: "Discord",
								link: "https://discord.gg/KDe48PgnE5",
								target: "_blank",
								icon: "discord",
							},
							{
								title: "Telegram",
								link: "https://t.me/PureCube",
								target: "_blank",
								icon: "telegram",
							},
						]}
					/>
				</div>
			</div>
			<span className="text-sm md:text-base">© 2022 PureCube</span>
		</footer>
	)
}
