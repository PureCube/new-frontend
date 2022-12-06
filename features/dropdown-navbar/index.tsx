import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface DropdownNavbarProps {
	title: string,
	items: NavbarDropdownCardProps[],
}

export const DropdownNavbar = ({title, items}: DropdownNavbarProps) => {
	const [isOpened, setIsOpened] = useState(false);

	const toggleDropdown = () => {
		setIsOpened(!isOpened)
	}

	return (
		<>
			<a onClick={toggleDropdown} className="flex items-center gap-3 cursor-pointer">{title}<FontAwesomeIcon className={`w-3 ${isOpened && "rotate-180"}`} icon={faChevronDown} /></a>

			{isOpened && <div onClick={toggleDropdown} className="absolute top-0 bottom-0 right-0 left-0 z-10" />}

			{isOpened &&
				<div className="absolute z-20 right-0 left-0 mt-3 md:mt-5 container mx-auto">
					<div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 bg-black p-3 md:p-5 border-neutral-600 border-t rounded-b-3xl">
						{
							items.map( (item, index) => {
								return (
									<NavbarDropdownCard
										key={index}
										title={item.title}
										body={item.body}
										link={item.link}
										icon={item.icon}
									/>
								)
							})
						}
					</div>
				</div>
			}
		</>
	)
}

export interface NavbarDropdownCardProps {
	title: string,
	body: string,
	link?: string,
	icon?: string,
}

export const NavbarDropdownCard = ({title, body, link, icon}: NavbarDropdownCardProps) => {
	const CardElem = (
		<div className="p-3 md:p-5 grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-center rounded-3xl hover:bg-neutral-900 cursor-pointer">
			<div className="relative h-16 w-16 rounded-2xl bg-neutral-800">
				{icon && <Image src={icon} layout="fill" alt="icon" />}
			</div>
			<div>
				<span className="text-base md:text-lg font-heading-semibold uppercase">{title}</span>
				<p className="text-sm md:text-base font-body-regular">{body}</p>
			</div>
		</div>
	)

	return (
		<>
			{link ? 
				<Link href={link}>{CardElem}</Link>
				:
				{CardElem}
			}
		</>
	)
}