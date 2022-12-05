import Head from "next/head";
import { Meta } from "widgets/meta";

export default function Home() {
  return (
    <>
      <Head>
        <title>PureCube</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
      </Head>
    </>
  )
}
