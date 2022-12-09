import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faArtstation } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { teamMemberModelProps } from "entities/team-member";

export const TeamMemberCard = (teamMember: teamMemberModelProps) => {
	return (
		<div className="flex flex-col justify-between gap-1 bg-neutral-800 p-2 md:p-3 rounded-3xl">
			<div className="flex flex-col">
				<div className="relative overflow-hidden pt-[100%] w-full h-auto bg-neutral-700 rounded-3xl select-none mb-2">
					{teamMember.image && <Image src={teamMember.image} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
				</div>
				<span className="text-base md:text-lg uppercase font-heading-semibold">{teamMember.name}</span>
				<span className="text-sm md:text-base">{teamMember.role}</span>
			</div>
			<div className="flex gap-3">
				{teamMember.linkedin && <a href={teamMember.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon className='w-5' icon={faLinkedin} /></a>}
				{teamMember.github && <a href={teamMember.github} target="_blank" rel="noreferrer"><FontAwesomeIcon className='w-5' icon={faGithub} /></a>}
				{teamMember.artstation && <a href={teamMember.artstation} target="_blank" rel="noreferrer"><FontAwesomeIcon className='w-5' icon={faArtstation} /></a>}
			</div>
		</div>
	)
}
