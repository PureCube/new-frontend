import { InfoBlockCard } from "./ui/info-block-card";
import type { InfoBlockCardProps } from "./ui/info-block-card";

export interface InfoBlockProps {
	cards: InfoBlockCardProps[],
}

export const InfoBlock = ({cards}: InfoBlockProps) => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
			{
				cards.map( (card, index) => {
					return (
						<InfoBlockCard
							key={index}
							title={card.title}
							body={card.body}
							soon={card.soon}
							image={card.image}
						/>
					);
				})
			}
		</section>
	)
}
