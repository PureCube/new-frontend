import { teamMemberModelProps } from "entities/team-member";
import { TeamMemberCard } from "./ui/team-member-card";

export interface TeamBlockProps {
	title: string,
	cards: teamMemberModelProps[],
	others?: boolean,
}

export const TeamBlock = ({title, cards, others=false}: TeamBlockProps) => {
	return (
		<section className="bg-neutral-900 p-3 md:p-5 rounded-3xl space-y-3 md:space-y-5">
			<h3 className="text-2xl md:text-3xl font-heading-semibold uppercase">{title}</h3>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
				{
					cards.map( (card, index) => {
						return (
							<TeamMemberCard
								key={index}
								name={card.name}
								role={card.role}
								image={card.image}
								linkedin={card.linkedin}
								github={card.github}
								artstation={card.artstation}
							/>
						);
					})
				}
				<div className="flex justify-center items-center">
					{others && <span className="rounded-3xl py-8 px-5 text-lg md:text-2xl font-heading-semibold text-center uppercase whitespace-pre select-none">{"10+ \n team \n members"}</span>}
				</div>
			</div>
		</section>
	)
}
