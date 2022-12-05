export interface MainProps {
	children: string | JSX.Element | JSX.Element[],
}

export const Main = ({children}: MainProps) => {
	return (
		<main className="min-h-[80vh]">
			{children}
		</main>
	)
}
