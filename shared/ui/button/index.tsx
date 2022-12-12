export interface ButtonProps {
	children: string,
	type?: "primary" | "secondary",
	onClick?: any,
}

export const Button = ({children, type="primary", onClick}: ButtonProps) => {
	if (type === "primary") return (
		<button
			className="font-heading-semibold text-sm md:text-base text-black bg-white rounded-full px-5 py-2 select-none"
			onClick={onClick}
			>
				{children}
		</button>
	)

	if (type === "secondary") return (
		<button
			className="font-heading-semibold text-sm md:text-base text-white bg-neutral-800 rounded-full px-5 py-2 select-none"
			onClick={onClick}
			>
				{children}
		</button>
	)

	else return null;
}
