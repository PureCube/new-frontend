import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { newsModelProps } from "entities/news";

export const NewsCard = (news: newsModelProps) => {
	return (
		<a href={news.link} target={news.target} className="bg-neutral-800 rounded-3xl overflow-hidden">
			<div className="relative overflow-hidden bg-neutral-900 rounded-3xl pt-[56%] sm:pt-[40%] lg:pt-[66%]">
				{news.image && <Image src={news.image} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
			</div>
			<p className="relative text-base md:text-lg uppercase font-heading-semibold p-3 pr-9 md:p-5 md:pr-14">
				{news.title}
				<FontAwesomeIcon className='w-5 absolute top-3 md:top-5 right-3 md:right-5' icon={faArrowUpRightFromSquare} />
			</p>
		</a>
	)
}
