import { GameInfo } from "entities/game";
import Head from "next/head";
import { useRouter } from "next/router";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { gamesListModel } from "widgets/games";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";

export default function GamePage() {
	const router = useRouter();
  const {gameId} = router.query;
  const game = gamesListModel.games.find( game => game.gameId === gameId);

  if (game) return (
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
							gameId={game.gameId}
							description={game.description}
							cover={game.cover}
							about={game.about}
							title={game.title}
							developer={game.developer}
							platform={game.platform}
							genre={game.genre}
							status={game.status}
							network={game.network}
							engine={game.engine}
						/>
          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
