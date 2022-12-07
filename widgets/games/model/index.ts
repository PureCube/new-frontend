import { gameModelProps } from "entities/game";
import {makeAutoObservable} from 'mobx';

export interface gamesListModelProps {
	games: gameModelProps[],
}

export const gamesListModel: gamesListModelProps = makeAutoObservable({
	// STORE
	games: [

		{
			gameId: "chubby-runners",
			title: "Chubby Runners",
			description: "Chubby Runners is an adorable, silly, and simple-to-learn game combining mobile runner and battle royale genres. There is just you and a desire to outperform your fellow players. You need to survive, earn points, and race to the finish line round by round. Momentum really matters",
			genre: "hybrid-casual",
			platform: "mobile",
			developer: "PureCube",
			status: "beta",
			cover: "/images/006.png",
			network: "near",
			engine: "unity",
			about: [
				{
					title: "About the game",
					body: "Chubby Runners is an adorable, silly, and simple-to-learn game combining mobile runner and battle royale genres. There is just you and a desire to outperform your fellow players. You survive, scoring points and racing to the finish line each round. Momentum really matters.\n\nChubby Runners is a multiplayer game in which you should pass many obstacles and push others over the run, especially to overtake another player. The first player who crosses the finish line is the winner!\n\nIt's an impressive and charming game filled with genuinely dramatic moments, heartbreaking losses, and last-second acrobatic feats.\n\nChubby Runners is best in small doses. Several matches a day is usually enough to get great fun mixed with some delicious tension in the finals.",
				},
				{
					title: "Gameplay",
					body: "You can push other players to the obstacles or knock them down with various boosts. Getting ragdolled or shoved out of contention by opponents can give you a sense of enjoyment and engagement, but as the end of the round approaches, you will take things seriously as hell. Sometimes at once, you can be in a fury and chase the opponent to kick up that ass that threw up a bomb during your's dodging trap.\nIt's never unclear when you need to jump over a gap or navigate through the hordes of contestants trying to reach the finish line before you.\n\nIf you are quick enough, skilled enough, or lucky enough to place at the top of a round, you get trophies and climb the upper league. If you fall short – that's a wrap. Better luck next time. Just enjoy the game.",
				},
			],
		},

		{
			gameId: "near-runner",
			title: "Near Runner",
			description: "Near Runner is an animated, colorful, cartoonish game combining single-player and multiplayer modes. Test your skills against another player in an online match, climb to the top of the global leaderboard and show your friend and others who the boss is",
			genre: "hybrid-casual",
			platform: "mobile",
			developer: "PureCube",
			status: "demo",
			cover: "/images/002.jpg",
			network: "near",
			engine: "unity",
		},

	],
});
