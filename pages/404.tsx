import Head from "next/head";
import Link from "next/link";
import { Meta } from "shared/model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>PureCube</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
      </Head>

      <div className="flex flex-col justify-center items-center h-screen gap-3 md:gap-8 select-none">
        <span className="font-heading-bold flex flex-wrap items-center justify-center gap-3">
          <span className="text-6xl md:text-9xl">404|</span>
          <span className="flex flex-col gap-3">
            <span className="text-4xl md:text-7xl">Page</span>
            <span className="text-xl md:text-4xl">Not Found</span>
          </span>
        </span>
        <Link href="/">
          <span className="text-xl flex items-center gap-3 hover:underline">
            <span>home page</span>
            <FontAwesomeIcon className="w-5" icon={faArrowUpRightFromSquare} />
          </span>
        </Link>
      </div>
    </>
  )
}
