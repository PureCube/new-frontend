export interface ContainerProps {
	children: string | JSX.Element | JSX.Element[],
}

export const Container = ({children}: ContainerProps) => {
	return (
		<div className="container mx-auto">
			{children}
		</div>
	)
}
