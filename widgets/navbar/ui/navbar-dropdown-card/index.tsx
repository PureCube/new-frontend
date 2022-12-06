import Link from "next/link";
import Image from "next/image";

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
