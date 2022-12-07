import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { SecondHero } from "widgets/hero";
import { Navbar } from "widgets/navbar";

export default function TokenPage() {
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
            <SecondHero
              image="/images/token.png"
              soon={true}
            />
          </div>
        </Main>

        <Footer />
      </Container>
    </>
  )
}
