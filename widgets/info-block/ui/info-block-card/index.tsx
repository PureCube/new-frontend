import Image from "next/image";

export interface InfoBlockCardProps {
	title: string,
	body: string,
	soon?: boolean,
	image?: string,
}

export const InfoBlockCard = ({title, body, soon=false, image}: InfoBlockCardProps) => {
	return (
		<div className="relative overflow-hidden pt-[56%] sm:pt-[33%] lg:pt-[56%] bg-neutral-900 rounded-3xl">
			{image && <Image src={image} layout="fill" objectFit="cover" alt="cover" />}
			{soon && <span className="absolute top-0 right-0 m-3 md:m-5 px-2 py-1 rounded-full text-sm md:text-base bg-neutral-800/50 select-none">coming soon</span>}
			<div className="absolute top-0 bottom-0 flex flex-col justify-end gap-1 p-3 md:p-5">
				<h2 className="text-xl md:text-2xl font-heading-medium uppercase">{title}</h2>
				<p className="text-base md:text-lg">{body}</p>
			</div>
		</div>
	)
}
