import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import Link from "next/link";

export const MobileNavbar = () => {
	const [isOpened, setIsOpened] = useState(false);

	const toggleDropdown = () => {
		setIsOpened(!isOpened);
	}

	return (
		<>
			<div onClick={toggleDropdown} className="lg:hidden flex mt-1 cursor-pointer">
				<FontAwesomeIcon className="h-5" icon={faBars} />
			</div>

			{isOpened &&
			<nav className="absolute z-10 top-16 right-0 left-0 bottom-0 bg-black container mx-auto">
				
					<ul className="border-neutral-600 border-t py-3 md:py-5 space-y-3 md:space-y-5">
						<li className="text-xl md:text-2xl font-heading-semibold">
							<Link href="/games">Games</Link>
						</li>
					</ul>

					<ul className="border-neutral-600 border-t py-3 md:py-5 space-y-3 md:space-y-5">
						<span className="text-base md:text-lg uppercase text-neutral-400">Projects</span>
						<li className="text-xl md:text-2xl font-heading-semibold">
							<Link href="/platform">Platform</Link>
						</li>
						<li className="text-xl md:text-2xl font-heading-semibold">
							<Link href="/marketplace">Marketplace</Link>
						</li>
						<li className="text-xl md:text-2xl font-heading-semibold">
							<Link href="/token">Token</Link>
						</li>
					</ul>

					<ul className="border-neutral-600 border-t py-3 md:py-5 space-y-3 md:space-y-5">
						<span className="text-base md:text-lg uppercase text-neutral-400">Follow Us</span>
						<li>
							<a className="flex items-center gap-3" href="https://twitter.com/purecube_io" target="_blank" rel="noreferrer">
								<FontAwesomeIcon className='w-5' icon={faTwitter} />
								<span className="text-base md:text-lg">Twitter</span>
							</a>
						</li>

						<li>
							<a className="flex items-center gap-3" href="https://discord.gg/KDe48PgnE5" target="_blank" rel="noreferrer">
								<FontAwesomeIcon className='w-5' icon={faDiscord} />
								<span className="text-base md:text-lg">Discord</span>
							</a>
						</li>

						<li>
							<a className="flex items-center gap-3" href="https://medium.com/@pureblock" target="_blank" rel="noreferrer">
								<FontAwesomeIcon className='w-5' icon={faMedium} />
								<span className="text-base md:text-lg">Medium</span>
							</a>
						</li>

						<li>
							<a className="flex items-center gap-3" href="https://github.com/purecube" target="_blank" rel="noreferrer">
								<FontAwesomeIcon className='w-5' icon={faGithub} />
								<span className="text-base md:text-lg">Github</span>
							</a>
						</li>

					</ul>

				</nav>
			}
		
		</>
	)
}
