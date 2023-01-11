import { newsModelProps } from "entities/news";
import {makeAutoObservable} from 'mobx';

export interface newsListModelProps {
	newsList: newsModelProps[],
}

export const newsListModel: newsListModelProps = makeAutoObservable({
	// STORE
	newsList: [
		{
			title: "Welcome to PureCube. The rise of blockchain gaming",
			body: "PureCube is a next-generation gaming studio launching its games and developing a unified gaming platform for blockchain games",
			link: "https://medium.com/@pureblock/welcome-to-pureblock-5a78cc85738d",
			target: "_blank",
			image: "/images/001.jpg",
			imagePosition: "right",
		},
		{
			title: "Discover the First Block ecosystem in the PureCube",
			link: "https://pureblock.medium.com/discover-the-first-block-ecosystem-in-the-pureblock-392a7778e9ef",
			target: "_blank",
			image: "/images/news/003.png",
			imagePosition: "bottom",
		},
		{
			title: "All you need to know about Chubby Runners game",
			link: "/game/chubby-runners",
			image: "/images/games/chubby-runners.png",
		},
	]
});
