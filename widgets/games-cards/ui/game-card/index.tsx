import Image from "next/image";

export interface GameCardProps {
	link?: string,
	target?: "_self" | "_blank",
	isVisible?: boolean,
	image?: string,
}

export const GameCard = ({link, target="_self", isVisible=true, image}: GameCardProps) => {
	const elem = (
		<span className={`inline-block overflow-hidden relative pt-[66%] rounded-3xl ${!isVisible ? "bg-transparent cursor-default" : "bg-neutral-800"}`}>
			{image && <Image src={image} layout="fill" objectFit="cover" alt="cover" />}
		</span>
	)

	if (!link) return elem;
	return (
		<a href={link} target={target}>{elem}</a>
	)
}
