export interface AboutProps {
	title: string,
	body: string,
}

export interface DownloadProps {
	appstore?: string,
	googleplay?: string,
}

export interface gameModelProps {
	gameId: string,
	title: string,
	description: string,
	genre: "hybrid-casual" | string,
	platform: "mobile" | "pc",
	developer: string,
	status: "demo" | "beta" | "live" | "development",
	cover: string,

	network?: "near",
	engine?: "unity" | string,
	about?: AboutProps[],
	download?: DownloadProps,
}
