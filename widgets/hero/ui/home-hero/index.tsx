import { newsModelProps } from "entities/news";
import Image from "next/image";
import { LinkButton } from "shared/ui";

export const HomeHero = (news: newsModelProps) => {
	return (
		<section className="relative overflow-hidden flex items-end h-[50vh] md:h-[80vh] bg-neutral-900 p-3 md:p-5 rounded-3xl">
			{news.image && <Image src={news.image} layout="fill" objectFit="cover" objectPosition={news.imagePosition} alt="cover" />}
			<div className="relative w-full space-y-3">
				<h1 className="text-3xl md:text-4xl leading-normal font-heading-semibold uppercase md:w-2/3">{news.title}</h1>
				<p className="text-base md:text-lg md:w-2/3">{news.body}</p>
				<LinkButton link={news.link} target={news.target} arrow={true}>Read about</LinkButton>
			</div>
		</section>
	)
}
