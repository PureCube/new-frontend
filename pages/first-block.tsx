import Head from "next/head";
import { Meta } from "shared/model";
import { Container, LinkButton, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";

export default function FirstBlockPage() {
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
            
            <div className="flex justify-center items-center gap-5 text-center">
							<div className="space-y-3 md:space-y-5 lg:w-2/3">
								<p className="text-base md:text-lg whitespace-pre-line">{"These days, opportunities for independent creative processes grow exponentially – you can self-publish a book, run a blog, organize a personal exhibition, or launch a new video game.\n\nThe mission of PureCube is to simplify the creation of games by providing game developers and teams tools for collaboration, development, management, and marketing to enable passionate individuals to pursue their dreams with a minimal price to pay in case of failure. Being your boss, working in an inherently aspiring team, and making your vision come true are the factors on which the PureCube is founded."}</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center text-center gap-3 md:gap-5">
							<img className="w-auto h-14 md:h-24" src="/logo.svg" alt="logo" />
							<p className="text-base md:text-lg md:w-4/5 lg:w-2/3">The mission of games by PureCube is to bridge the gap between web 2.0 and web 3.0. We set three priorities to achieve our goal</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-3">
							<div className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-center bg-neutral-900 p-3 md:p-5 rounded-3xl">
								<div className="h-20 w-20 rounded-3xl bg-neutral-800" />
								<div>
									<span className="text-lg md:text-xl font-heading-semibold uppercase">Lorem ipsum</span>
									<p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur</p>
								</div>
							</div>
							<div className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-center bg-neutral-900 p-3 md:p-5 rounded-3xl">
								<div className="h-20 w-20 rounded-3xl bg-neutral-800" />
								<div>
									<span className="text-lg md:text-xl font-heading-semibold uppercase">Lorem ipsum</span>
									<p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur</p>
								</div>
							</div>
							<div className="grid grid-cols-[auto_1fr] gap-3 md:gap-5 items-center bg-neutral-900 p-3 md:p-5 rounded-3xl">
								<div className="h-20 w-20 rounded-3xl bg-neutral-800" />
								<div>
									<span className="text-lg md:text-xl font-heading-semibold uppercase">Lorem ipsum</span>
									<p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur</p>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
							<div className="relative pt-[56%] bg-neutral-800 rounded-3xl" />
							<div className="space-y-3 md:space-y-5">
								<h2 className="text-2xl md:text-3xl font-heading-semibold uppercase">Play, Mint, Earn, Buy or Sell. Your item - Your choice</h2>
								<p className="text-base md:text-lg whitespace-pre-line">{"A-Runners are designed to provide play & earn experience. We truly believe in rewarding players for their effort, skill, and loyalty"}</p>
							</div>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

							<div className="space-y-5 md:space-y-9 order-1 md:order-none">

								<div className="flex items-center gap-3">
									<div className="h-16 w-16 rounded-3xl bg-neutral-800" />
									<span className="text-2xl md:text-3xl font-heading-semibold">Runners</span>
								</div>

								<h2 className="text-4xl md:text-5xl font-heading-semibold md:whitespace-pre-line">{`Differ from others.\nBring your\ngame characters\ninto play`}</h2>

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

						<div className="grid grid-cols-2 lg:flex items-center gap-y-5">

							<div className="w-full lg:w-3/12">
								<img className="w-full select-none" src="/images/support1.png" alt="cover" loading="lazy" />
							</div>

							<div className="space-y-3 md:space-y-5 text-center w-full lg:w-6/12 col-span-2 -order-1 lg:order-none">
								<h2 className="text-2xl md:text-3xl font-heading-semibold uppercase whitespace-pre-line">{`Add your NFT collections\nto our games`}</h2>
								<p className="text-base md:text-lg whitespace-pre-line">{"Are you an NFT collection creator, artist, or game developer? Share more details about your NFTs by clicking the button below so we can discuss how to collaborate with you!"}</p>
								<LinkButton link="lol">Contact us</LinkButton>
							</div>

							<div className="w-full lg:w-3/12">
								<img className="w-full select-none" src="/images/support2.png" alt="cover" loading="lazy" />
							</div>

						</div>

          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
