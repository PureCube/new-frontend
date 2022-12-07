import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { GamesList } from "widgets/games-list";
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
            <GamesList
              cards={[
                {
                  title: "Chubby Runners",
                  description: "Chubby Runners is an adorable, silly, and simple-to-learn game combining mobile runner and battle royale genres. There is just you and a desire to outperform your fellow players. You need to survive, earn points, and race to the finish line round by round. Momentum really matters",
                  genre: "hybrid-casual",
                  platform: "mobile",
                  developer: "PureCube",
                  status: "beta",
                  link: "/game/chubby-runners",
                  image: "/images/006.png"
                },
                {
                  title: "Near Runner",
                  description: "Near Runner is an animated, colorful, cartoonish game combining single-player and multiplayer modes. Test your skills against another player in an online match, climb to the top of the global leaderboard and show your friend and others who the boss is",
                  genre: "hybrid-casual",
                  platform: "mobile",
                  developer: "PureCube",
                  status: "demo",
                  link: "/game/near-runner",
                  image: "/images/002.jpg"
                },
              ]}
            />
          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
