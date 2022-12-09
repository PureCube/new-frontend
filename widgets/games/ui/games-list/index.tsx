import { GameListItem } from "entities/game";
import { gamesListModel } from "widgets/games";
import { observer } from "mobx-react-lite";

export const GamesList = observer( () => {
	return (
		<section className="space-y-36">
			{
				gamesListModel.games.map( (game, index) => {
					return (
						<GameListItem
							key={index}
							title={game.title}
							description={game.description}
							genre={game.genre}
							platform={game.platform}
							developer={game.developer}
							status={game.status}
							gameId={game.gameId}
							cover={game.cover}
						/>
					)
				})
			}
		</section>
	)
})
