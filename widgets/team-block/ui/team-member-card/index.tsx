import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faArtstation } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export interface TeamMemberCardProps {
	name: string,
	role: string,
	image: string,
	linkedin?: string,
	github?: string,
	artstation?: string,
}

export const TeamMemberCard = ({name, role, image, linkedin, github, artstation}: TeamMemberCardProps) => {
	return (
		<div className="flex flex-col justify-between gap-1 bg-neutral-800 p-2 md:p-3 rounded-3xl">
			<div className="flex flex-col">
				<div className="relative overflow-hidden pt-[100%] w-full h-auto bg-neutral-700 rounded-3xl select-none mb-2">
					{image && <Image src={image} layout="fill" objectFit="cover" objectPosition="bottom" alt="cover" />}
				</div>
				<span className="text-base md:text-lg uppercase font-heading-semibold">{name}</span>
				<span className="text-sm md:text-base">{role}</span>
			</div>
			<div className="flex gap-3">
				{linkedin && <a href={linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon className='w-5' icon={faLinkedin} /></a>}
				{github && <a href={github} target="_blank" rel="noreferrer"><FontAwesomeIcon className='w-5' icon={faGithub} /></a>}
				{artstation && <a href={artstation} target="_blank" rel="noreferrer"><FontAwesomeIcon className='w-5' icon={faArtstation} /></a>}
			</div>
		</div>
	)
}
