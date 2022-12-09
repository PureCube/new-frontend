import { NewsCard } from "entities/news";
import { LinkButton } from "shared/ui";
import { newsListModel } from "./model";

export const NewsList = () => {
	return (
		<section className="bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-3 md:space-y-5">
			<div className="flex items-center justify-between gap-3 md:gap-5">
				<h3 className="text-2xl md:text-3xl font-heading-semibold">Latest updates & news</h3>
				<LinkButton link="/" arrow={true} type="secondary">show all</LinkButton>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5">
				{
					newsListModel.newsList.slice(-3).map ( (news, index) => {
						return (
							<NewsCard
								key={index}
								title={news.title}
								link={news.link}
								target={news.target}
								image={news.image}
							/>
						);
					})
				}
			</div>
		</section>
	)
}
