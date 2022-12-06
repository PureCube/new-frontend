import Image from "next/image"

export interface PartnersProps {
	title: string,
	images: string[],
}

export const Partners = ({title, images}: PartnersProps) => {
	return (
		<section className="bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-3 md:space-y-5">
			<h3 className="text-2xl md:text-3xl font-heading-semibold">{title}</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
				{
					images.map( (image, index) => {
						return (
							<div key={index} className="relative bg-neutral-800 p-3 md:p-5 rounded-3xl">
								<Image src={image} width={200} height={200} alt="logo" />
							</div>
						)
					})
				}
			</div>
		</section>
	)
}
