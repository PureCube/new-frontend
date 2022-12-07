export interface AboutProps {
	title: string,
	body: string,
}

export interface DownloadProps {
	appstore?: string,
	googleplay?: string,
}

export interface gameModelProps {
	gameId: string | null,
	title: string | null,
	description: string | null,
	genre: "hybrid-casual" | string | null,
	platform: "mobile" | "pc" | null,
	developer: string | null,
	status: "demo" | "beta" | "live" | "development" | "presale" | null,
	cover: string | null,

	network?: "near" | null,
	engine?: "unity" | string | null,
	about?: AboutProps[],
	download?: DownloadProps,
}
