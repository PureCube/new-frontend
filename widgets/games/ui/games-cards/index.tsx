import { GameCard } from "../game-card";
import type { GameCardProps } from "../game-card";
import { LinkButton } from "shared/ui";
import Image from "next/image";


export interface GamesCardsProps {
	title: string,
	subtitle: string,
	cards: GameCardProps[],
	image?: string,
}

export const GamesCards = ({title, subtitle, cards, image}: GamesCardsProps) => {
	return (
		<section className="bg-neutral-900 overflow-hidden rounded-3xl">

			<div className="relative overflow-hidden pt-[30%] bg-neutral-800 rounded-3xl">
				{image && <Image src={image} layout="fill" objectFit="cover" objectPosition="left" alt="cover" />}
				<h3 className="relative text-2xl md:text-4xl font-heading-semibold uppercase p-3 md:p-5">{title}</h3>
			</div>

			<div className="flex items-center justify-between gap-3 md:gap-5 px-3 pt-3 md:px-5 md:pt-5">
				<span className="inline-block text-sm md:text-base">{subtitle}</span>
				<LinkButton link="/games" arrow={true} type="secondary">show all</LinkButton>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 p-3 md:p-5">
				{
					cards.map( (card, index) => {
						return (
							<GameCard
								key={index}
								isVisible={card.isVisible}
								link={card.link}
								target={card.target}
								image={card.image}
							/>
						);
					})
				}
			</div>

		</section>
	)
}
