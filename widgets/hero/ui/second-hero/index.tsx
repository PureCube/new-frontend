import Image from "next/image";

export interface SecondHeroProps {
	title?: string,
	body?: string,
	soon?: boolean,
	image?: string,
	isBgTransparent?: boolean,
	imagePosition?: "center" | "right" | "bottom" | "left" | "top",
}

export const SecondHero = ({title, body, soon=false, image, imagePosition="center", isBgTransparent=false}: SecondHeroProps) => {
	return (
		<section className={`relative overflow-hidden flex flex-col justify-center items-center h-[50vh] md:h-[80vh] p-3 md:p-5 rounded-3xl ${isBgTransparent ? "bg-transparent" : "bg-neutral-900"}`}>
			{image && <Image src={image} layout="fill" objectFit="cover" objectPosition={imagePosition} alt="cover" />}
			{soon && <span className="absolute top-0 m-6 px-3 py-3 rounded-full text-xl bg-neutral-800/50 select-none">coming soon</span>}
			<div className="relative flex flex-col justify-center items-center space-y-3 text-center">
				<h1 className="text-3xl md:text-4xl leading-normal font-heading-semibold sm:whitespace-pre-line uppercase">{title}</h1>
				<p className="text-base md:text-lg md:w-2/3">{body}</p>
			</div>
		</section>
	)
}
