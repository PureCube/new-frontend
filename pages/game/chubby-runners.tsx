import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { GameInfo } from "widgets/game-info";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";

export default function ChubbyRunners() {
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
						<GameInfo
							image="/images/006.png"
							about={[
								{
									title: "About the game",
									body: "Chubby Runners is an adorable, silly, and simple-to-learn game combining mobile runner and battle royale genres. There is just you and a desire to outperform your fellow players. You survive, scoring points and racing to the finish line each round. Momentum really matters.\n\nChubby Runners is a multiplayer game in which you should pass many obstacles and push others over the run, especially to overtake another player. The first player who crosses the finish line is the winner!\n\nIt's an impressive and charming game filled with genuinely dramatic moments, heartbreaking losses, and last-second acrobatic feats.\n\nChubby Runners is best in small doses. Several matches a day is usually enough to get great fun mixed with some delicious tension in the finals.",
								},
								{
									title: "Gameplay",
									body: "You can push other players to the obstacles or knock them down with various boosts. Getting ragdolled or shoved out of contention by opponents can give you a sense of enjoyment and engagement, but as the end of the round approaches, you will take things seriously as hell. Sometimes at once, you can be in a fury and chase the opponent to kick up that ass that threw up a bomb during your's dodging trap.\nIt's never unclear when you need to jump over a gap or navigate through the hordes of contestants trying to reach the finish line before you.\n\nIf you are quick enough, skilled enough, or lucky enough to place at the top of a round, you get trophies and climb the upper league. If you fall short – that's a wrap. Better luck next time. Just enjoy the game.",
								},
							]}
							game="Chubby Runners"
							developer="PureCube"
							platform="mobile"
							genre="hybrid-casual"
							status="beta"
							network="Near"
							engine="Unity"
						/>
          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
