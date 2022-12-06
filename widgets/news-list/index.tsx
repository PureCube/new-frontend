import { NewsCard } from "./ui/news-card";
import type { NewsCardProps } from "./ui/news-card";
import { LinkButton } from "shared/ui";

export interface UpdatesBlockProps {
	title: string,
	cards: NewsCardProps[];
}

export const NewsList = ({title, cards}: UpdatesBlockProps) => {
	return (
		<section className="bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-3 md:space-y-5">
			<div className="flex items-center justify-between gap-3 md:gap-5">
				<h3 className="text-2xl md:text-3xl font-heading-semibold">{title}</h3>
				<LinkButton link="/" arrow={true} type="secondary">show all</LinkButton>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5">
				{
					cards.map ( (card, index) => {
						return (
							<NewsCard
								key={index}
								title={card.title}
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
