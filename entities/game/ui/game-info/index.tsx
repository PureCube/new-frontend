import { gameModelProps } from "entities/game";
import Image from "next/image";

export const GameInfo = (game: gameModelProps) => {
	return (
		<section className="flex flex-col gap-5">
			<h3 className="text-xl md:text-2xl font-heading-semibold uppercase">{game.title}</h3>

			<div className="flex flex-col md:flex-row gap-20 md:gap-5">

				<div className="md:w-8/12 space-y-3 md:space-y-5">
					<div className="relative overflow-hidden pt-[66%] md:pt-[56%] bg-neutral-900 rounded-3xl">
						{game.cover && <Image src={game.cover} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
					</div>
					<div className={`bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-3 md:space-y-5 ${!game.about && "hidden"}`}>
						{
							game.about && game.about.map( (el) => {
								return (
									<>
										<h3 className="text-2xl md:text-3xl font-heading-semibold uppercase">{el.title}</h3>
										<p className="text-base md:text-lg whitespace-pre-line">{el.body}</p>
									</>
								);
							})
						}
					</div>
				</div>

				<div className="md:w-4/12 space-y-3 md:space-y-5">
					<ul className="bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-5 font-body-semibold uppercase text-base md:text-lg">
						<li className="flex justify-between items-center">
							<span>Platform: </span>
							<span className="bg-neutral-800 rounded-lg px-2 pt-1">{game.platform}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Genre: </span>
							<span className="bg-neutral-800 rounded-lg px-2 pt-1">{game.genre}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Status: </span>
							<span className="bg-neutral-800 rounded-lg px-2 pt-1">{game.status}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Network: </span>
							<span className="bg-neutral-800 rounded-lg px-2 py-1">
								{game.network === "near" && <img src="/icons/near2.svg" alt="icon" />}
								{game.network !== "near" && game.network}
								</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Engine: </span>
							<span className="bg-neutral-800 rounded-lg px-2 py-1">
								{game.engine === "unity" && <img src="/icons/unity.svg" alt="icon" />}
								{game.engine !== "unity" && game.engine}
							</span>
						</li>
						{game.download && game.download.hasOwnProperty("appstore") && game.download.hasOwnProperty("googleplay") &&
						<li className="flex gap-3 md:gap-5">
							<a href={game.download.appstore} target="_blank" rel="noreferrer"><img src="/icons/appstore.svg" alt="link" /></a>
							<a href={game.download.googleplay} target="_blank" rel="noreferrer"><img src="/icons/googleplay.svg" alt="link" /></a>
						</li>
						}
					</ul>
				</div>

			</div>


		</section>
	)
}
