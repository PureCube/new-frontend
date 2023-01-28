import { gameModelProps } from "entities/game";
import Image from "next/image";
import { LinkButton } from "shared/ui";

export interface GameListItemProps extends gameModelProps {
	bgTransparent?: boolean,
	showDetails?: boolean,
}

export const GameListItem = (game: GameListItemProps) => {
	return (
		<div className={`grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5 items-center p-3 md:p-5 rounded-3xl ${game.bgTransparent ? "bg-transparent" : "bg-neutral-900"}`}>

			<div className="relative overflow-hidden pt-[56%] rounded-3xl">
				{game.cover && <Image src={game.cover} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
			</div>


			<div className="flex flex-col sm:items-start space-y-3">
				<h3 className="text-2xl md:text-3xl font-heading-semibold uppercase">{game.title}</h3>
				<p className="text-base md:text-lg">{game.description}</p>

				<div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 w-full ${game.showDetails ? "grid" : "hidden"}`}>
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Genre</span>
						<span className="text-base md:text-lg uppercase">{game.genre}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Platform</span>
						<span className="text-base md:text-lg uppercase">{game.platform}</span>
					</div>
					<div className="flex flex-col">
						<span className="text-base md:text-lg font-body-semibold">Status</span>
						<span className="text-base md:text-lg uppercase">{game.status}</span>
					</div>
				</div>

				<LinkButton link={`game/${game.gameId}`}>Explore</LinkButton>
			</div>
		</div>
	)
}
