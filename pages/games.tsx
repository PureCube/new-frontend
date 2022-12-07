import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
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
          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
