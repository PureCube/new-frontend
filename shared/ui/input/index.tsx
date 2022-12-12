export interface InputProps {
	type: string,
	placeholder: string,
	value: string,
	onChange: any,
}

export const Input = ({type, placeholder, value, onChange}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className="rounded-full bg-neutral-800 text-sm md:text-base py-2 md:py-3 px-3 md:px-4"
		/>
	)
}
