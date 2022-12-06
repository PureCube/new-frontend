import Image from "next/image";
import { LinkButton } from "shared/ui";

export interface HomeHeroProps {
	title: string,
	body: string,
	link: string,
	target?: "_blank" | "_self",
	image?: string,
	imagePosition?: "center" | "right" | "bottom" | "left" | "top",
}

export const HomeHero = ({title, body, link, target="_self", image, imagePosition="center"}: HomeHeroProps) => {
	return (
		<section className="relative overflow-hidden flex items-end h-[50vh] md:h-[80vh] bg-neutral-900 p-3 md:p-5 rounded-3xl">
			{image && <Image src={image} layout="fill" objectFit="cover" objectPosition={imagePosition} alt="cover" />}
			<div className="relative w-full space-y-3">
				<h1 className="text-3xl md:text-4xl leading-normal font-heading-bold uppercase">{title}</h1>
				<p className="text-base md:text-lg md:w-2/3">{body}</p>
				<LinkButton link={link} target={target} arrow={true}>Read about</LinkButton>
			</div>
		</section>
	)
}
