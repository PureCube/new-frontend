import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { config } from "shared/config";
import { Meta } from "shared/model";
import { Container, LinkButton, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { GamesList } from "widgets/games";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";
import { useEffect } from "react";

export default function FirstBlockPage() {

	useEffect( () => {
		const callback = function (entries: any) {
			entries.forEach((entry: any) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-fadeIn");
				} else {
					entry.target.classList.remove("animate-fadeIn");
				}
			});
		};
		const observer = new IntersectionObserver(callback);
		const targets = document.querySelectorAll(".js-show-on-scroll");
		targets.forEach(function (target) {
			target.classList.add("opacity-0");
			observer.observe(target);
		});
	}, [] )

  return (
    <>
      <Head>
        <title>PureCube</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
      </Head>

      <Container>

        <Header
          navbar={<Navbar />}
        />

        <Main>
          <div className="space-y-40 pb-40">

            <section className={`relative overflow-hidden flex flex-col justify-center items-center h-[80vh] p-3 md:p-5 rounded-3xl bg-transparent}`}>
              <div className="relative flex flex-col justify-between items-center h-full space-y-3 text-center">
                <div />
                <h1 className="text-5xl md:text-7xl leading-normal font-heading-semibold sm:whitespace-pre-line uppercase">The first block <br /> ecosystem</h1>
                <div className="flex flex-wrap gap-3 md:gap-5">
                  <img className="w-36" src="/icons/near2.svg" alt="icon" />
                </div>
              </div>
            </section>

						<div className="js-show-on-scroll">
							<span className="text-base md:text-lg uppercase">FIRST BLOCK is</span>
							<p className="text-4xl md:text-5xl uppercase font-heading-semibold">the mini-ecosystem that allows in-game assets in the formats of NFTs and fungible tokens to be dispersed between games, ensuring their continuity</p>
						</div>
						<p className="text-4xl md:text-5xl uppercase font-heading-semibold js-show-on-scroll">The mission of games by PureCube is to bridge the gap between web 2.0 and web 3.0. We set three priorities to achieve our goal</p>

						<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-3 js-show-on-scroll">
							<div className="flex flex-col gap-3 md:gap-5">
								<div className="h-20 w-20 rounded-3xl bg-neutral-800" />
								<div>
									<span className="text-lg md:text-xl font-heading-semibold uppercase">Open Doors</span>
									<p className="text-sm md:text-base">Free-to-play</p>
									<p className="text-sm md:text-base">No crypto wallet needed</p>
								</div>
							</div>
							<div className="flex flex-col gap-3 md:gap-5">
								<div className="h-20 w-20 rounded-3xl bg-neutral-800" />
								<div>
									<span className="text-lg md:text-xl font-heading-semibold uppercase">Game First</span>
									<p className="text-sm md:text-base">Fun-to-play</p>
									<p className="text-sm md:text-base">Attractive graphics</p>
								</div>
							</div>
							<div className="flex flex-col gap-3 md:gap-5">
								<div className="h-20 w-20 rounded-3xl bg-neutral-800" />
								<div>
									<span className="text-lg md:text-xl font-heading-semibold uppercase">Blockchain</span>
									<p className="text-sm md:text-base">Play-to-earn</p>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 js-show-on-scroll">
							<div className="relative pt-[56%] bg-neutral-800 rounded-3xl" />
							<div className="space-y-3 md:space-y-5">
								<h2 className="text-2xl md:text-3xl font-heading-semibold uppercase">Play, Mint, Earn, Buy or Sell. Your item - Your choice</h2>
								<p className="text-base md:text-lg">Chubby Runners are non-fungible tokens designed to provide utility across the FIRST BLOCK ecosystem and entirely in the PURECUBE entertainment platform</p>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 js-show-on-scroll">
							<div className="space-y-5 md:space-y-9 order-1 md:order-none">
								<div>
									<h2 className="text-4xl md:text-5xl uppercase font-heading-semibold">Differ from others</h2>
								</div>
								<p className="text-base md:text-lg">Bring your game characters into play. Owning Chubby NFT allows you to access all the games with a better experience in the FIRST BLOCK ecosystem</p>
								<div className="flex flex-wrap md:flex-row gap-3 md:gap-5">
									<div className="flex flex-col gap-3 w-36">
										<div className="h-9 w-9 rounded-3xl bg-neutral-800" />
										<span className="text-base md:text-lg">333 origin Runner NFTs</span>
									</div>
									<div className="flex flex-col gap-3 w-36">
										<div className="h-9 w-9 rounded-3xl bg-neutral-800" />
										<span className="text-base md:text-lg">Breed, upgrade, trade</span>
									</div>
									<div className="flex flex-col gap-3 w-36">
										<div className="h-9 w-9 rounded-3xl bg-neutral-800" />
										<span className="text-base md:text-lg">Own & Earn Tokens</span>
									</div>
								</div>
								<div className="flex flex-wrap gap-3">
									<LinkButton link="kek" arrow={true}>Read about</LinkButton>
									<LinkButton link="kek" arrow={true} type="secondary">Show on OpenSea</LinkButton>
								</div>
							</div>
							<div className="relative pt-[56%] bg-neutral-800 rounded-3xl" />
						</div>

						<div className="space-y-3 md:space-y-5 js-show-on-scroll">
							<h2 className="text-4xl md:text-5xl uppercase font-heading-semibold text-center">Our Games</h2>
							<GamesList showDetails={false} bgTransparent={true} />
						</div>

						<div className="space-y-3 md:space-y-5 js-show-on-scroll">
							<h2 className="text-4xl md:text-5xl uppercase font-heading-semibold text-center">{`And we're not stopping here...`}</h2>
							<p className="text-base md:text-lg md:w-2/3 text-center mx-auto">Become part of our growing community with exclusive perks, first looks at new game content, and join thousands of players in our invite-only beta. More coming soon</p>
						</div>

						<div className="flex flex-wrap justify-around sm:justify-start lg:justify-around items-center gap-5 js-show-on-scroll">

							<a href={config.discord} target="_blank" rel="noopener noreferrer">
								<div className="bg-neutral-900 hover:bg-neutral-800 p-3 md:p-5 rounded-3xl w-60 h-40 flex flex-col justify-between">
									<div className="flex justify-between">
										<FontAwesomeIcon className='w-5' icon={faDiscord} />
										<FontAwesomeIcon className='w-5' icon={faArrowUpRightFromSquare} />
									</div>
									<div className="flex flex-col">
										<span>Discord</span>
										<span>+200 members</span>
									</div>
								</div>
							</a>

							<a href={config.twitter} target="_blank" rel="noopener noreferrer">
								<div className="bg-neutral-900 hover:bg-neutral-800 p-3 md:p-5 rounded-3xl w-60 h-40 flex flex-col justify-between">
									<div className="flex justify-between">
										<FontAwesomeIcon className='w-5' icon={faTwitter} />
										<FontAwesomeIcon className='w-5' icon={faArrowUpRightFromSquare} />
									</div>
									<div className="flex flex-col">
										<span>Twitter</span>
										<span>+200 members</span>
									</div>
								</div>
							</a>

							<a href={config.medium} target="_blank" rel="noopener noreferrer">
								<div className="bg-neutral-900 hover:bg-neutral-800 p-3 md:p-5 rounded-3xl w-60 h-40 flex flex-col justify-between">
									<div className="flex justify-between">
										<FontAwesomeIcon className='w-5' icon={faMedium} />
										<FontAwesomeIcon className='w-5' icon={faArrowUpRightFromSquare} />
									</div>
									<div className="flex flex-col">
										<span>Medium</span>
										<span>+200 members</span>
									</div>
								</div>
							</a>

						</div>

          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
