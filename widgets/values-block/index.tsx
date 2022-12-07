import Image from "next/image";

export interface ValuesBlockCardProps {
	title: string,
	body: string,
}

export interface ValuesBlockProps {
	title: string,
	body: string,
	cards: ValuesBlockCardProps[],
	image?: string,
}

export const ValuesBlock = ({title, body, cards, image}: ValuesBlockProps) => {
	return (
		<section className="bg-neutral-800 overflow-hidden rounded-3xl">

			<div className="flex flex-col lg:flex-row gap-x-5 gap-y-12 bg-neutral-900 p-3 md:p-5 rounded-3xl">
				<div className="relative lg:w-1/2 order-1 lg:order-none rounded-3xl overflow-hidden">
					{image && <Image src={image} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
				</div>
				<div className="lg:w-1/2 space-y-3 md:space-y-5">
					<h2 className="text-2xl md:text-3xl uppercase font-heading-semibold">{title}</h2>
					<p className="whitespace-pre-line text-base md:text-lg">{body}</p>
				</div>
			</div>

			<div className="p-3 md:p-5 space-y-3 md:space-y-5">
				<h3 className="text-2xl md:text-3xl font-heading-semibold uppercase">Our values</h3>

				<div className="flex justify-end">
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-3 md:gap-5 w-full 2xl:w-9/12">
						{
							cards.map( (card, index) => {
								return (
									<div key={index} className="relative pt-[45%] sm:pt-[30%] lg:pt-[20%] xl:pt-[90%] bg-neutral-900 rounded-3xl">
										<div className="absolute top-0 bottom-0 p-3 md:p-5 flex flex-col justify-between">
											<span className="text-base md:text-xl uppercase font-heading-semibold">{card.title}</span>
											<p className="text-base md:text-lg">{card.body}</p>
										</div>
									</div>
								);
							})
						}
					</div>
				</div>

			</div>

		</section>
	)
}
