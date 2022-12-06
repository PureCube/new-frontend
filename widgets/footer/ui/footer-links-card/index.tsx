import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export interface FooterLinksCardElemProps {
	title: string,
	link?: string,
	target?: "_self" | "_blank",
	soon?: boolean,
	icon?: string,
}

export interface FooterLinksCardProps {
	title: string,
	elems: FooterLinksCardElemProps[],
}

export const FooterLinksCard = ({title, elems}: FooterLinksCardProps) => {
	return (
		<div className="space-y-3">
			<span className="text-base md:text-lg font-heading-semibold uppercase">{title}</span>
			<ul className="space-y-2">
				{
					elems.map( (elem, index) => {
						return (
							<li key={index} className="flex items-center gap-3">
								{elem.icon === "twitter" && <FontAwesomeIcon className='w-5' icon={faTwitter} />}
								{elem.icon === "discord" && <FontAwesomeIcon className='w-5' icon={faDiscord} />}
								{elem.icon === "telegram" && <FontAwesomeIcon className='h-5' icon={faTelegram} />}
								{elem.soon ?
									<span className="text-sm md:text-base text-neutral-400">{elem.title}</span>
									:
									<a href={elem.link} target={elem.target} className="text-sm md:text-base hover:underline">{elem.title}</a>
								}
								{elem.soon && <span className="inline-block text-xs text-black bg-neutral-400 px-1 rounded-full select-none">soon</span>}
							</li>
						);
					})
				}
			</ul>
		</div>
	)
}
