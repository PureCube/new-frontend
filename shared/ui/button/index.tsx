export interface ButtonProps {
	children: string,
}

export const Button = ({children}: ButtonProps) => {
	return (
		<button className="font-heading-semibold text-sm md:text-base text-black bg-white rounded-full px-5 py-2 select-none">{children}</button>
	)
}
