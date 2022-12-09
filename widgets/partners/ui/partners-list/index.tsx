import { PartnerCard } from "entities/partner"
import { partnersModel } from "widgets/partners"

export const Partners = () => {
	return (
		<section className="bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-3 md:space-y-5">
			<h3 className="text-2xl md:text-3xl font-heading-semibold">Our Partners</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
				{
					partnersModel.partnersList.map( (partner, index) => {
						return (
							<PartnerCard
								key={index}
								image={partner.image}
							/>
						)
					})
				}
			</div>
		</section>
	)
}
