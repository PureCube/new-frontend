import Head from "next/head";
import { Meta } from "shared/model";
import { Container, LinkButton, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { GamesList } from "widgets/games";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";

export default function GamesPage() {
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

            <GamesList />

            <div className="grid grid-cols-2 lg:flex items-center gap-y-5 bg-neutral-900 rounded-3xl p-3 md:p-5">

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
