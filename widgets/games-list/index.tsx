import { GamesListItem } from "./ui/games-list-item";
import type { GamesListItemProps } from "./ui/games-list-item";

export interface GamesListProps {
	cards: GamesListItemProps[],
}

export const GamesList = ({cards}: GamesListProps) => {
	return (
		<section className="space-y-36">
			{
				cards.map( (card, index) => {
					return (
						<GamesListItem
							key={index}
							title={card.title}
							description={card.description}
							genre={card.genre}
							platform={card.platform}
							developer={card.developer}
							status={card.status}
							link={card.link}
							image={card.image}
						/>
					);
				})
			}
		</section>
	)
}
