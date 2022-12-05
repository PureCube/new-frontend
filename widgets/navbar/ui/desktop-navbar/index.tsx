import Link from "next/link";

export const DesktopNavbar = () => {
	return (
		<nav className="hidden lg:block">
			<ul className="flex justify-center items-center space-x-10 font-body-semibold">

				<li className="hover:underline">
					<Link href="/games">Games</Link>
				</li>

				<li className="hover:underline">
					<Link href="/about">About</Link>
				</li>

				<li className="hover:underline">
					<Link href="/projects">Projects</Link>
				</li>

			</ul>
		</nav>
	)
}
