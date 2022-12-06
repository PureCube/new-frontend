import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface LinkButtonProps {
	link: string,
	target?: "_blank" | "_self",
	children: string,
	arrow?: boolean,
	type?: "primary" | "secondary",
	rounded?: "full" | "semifull",
}

export const LinkButton = ({children, link, target="_self", arrow=false, type="primary", rounded="full"}: LinkButtonProps) => {
	return (
		<a className={`inline-flex justify-center items-center font-heading-semibold text-sm md:text-base ${rounded === "semifull" ? "rounded-xl px-4 py-2" : "rounded-full px-4 py-2"} whitespace-nowrap select-none ${type === "secondary" ? "text-white !bg-neutral-800" : "text-black bg-white"}`} href={link} target={target}>
			{children}
			{arrow && <FontAwesomeIcon className='ml-2 w-4' icon={faArrowRight} />}
		</a>
	)
}
