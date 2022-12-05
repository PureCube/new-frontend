import Head from "next/head";
import { Container, Main, Meta } from "shared";
import { Footer, Header } from "widgets";

export default function FirstBlockPage() {
  return (
    <>
      <Head>
        <title>PureCube</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
      </Head>

      <Container>
        <Header />
        <Main>main</Main>
        <Footer />
      </Container>
    </>
  )
}
