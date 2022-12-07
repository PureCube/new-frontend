import Image from "next/image";
import { LinkButton } from "shared/ui";

export interface GamesListItemProps {
	title: string,
	description: string,
	genre: string,
	platform: string,
	developer: string,
	status: string,
	link: string,
	image?: string,
}

export const GamesListItem = ({title, description, genre, platform, developer, status, link, image}: GamesListItemProps) => {
	return (
		<div className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5 items-center bg-neutral-900 p-3 md:p-5 rounded-3xl">

			<div className="relative overflow-hidden pt-[56%] bg-neutral-800 rounded-3xl">
				{image && <Image src={image} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
			</div>


			<div className="flex flex-col sm:items-start space-y-3">
				<h3 className="text-2xl md:text-3xl font-heading-semibold uppercase">{title}</h3>
				<p className="text-base md:text-lg">{description}</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 w-full">
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Genre</span>
						<span className="text-base md:text-lg uppercase">{genre}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Platform</span>
						<span className="text-base md:text-lg uppercase">{platform}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Developer</span>
						<span className="text-base md:text-lg uppercase">{developer}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Status</span>
						<span className="text-base md:text-lg uppercase">{status}</span>
					</div>
				</div>

				<LinkButton link={link}>Explore</LinkButton>
			</div>
		</div>
	)
}
