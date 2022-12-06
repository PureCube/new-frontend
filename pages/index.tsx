import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";
import { HomeHero } from "widgets/hero";
import { InfoBlock } from "widgets/info-block";
import { GamesCards } from "widgets/games-cards";
import { Partners } from "widgets/partners";
import { NewsList } from "widgets/news-list";

export default function HomePage() {
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

          <div className="space-y-6">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{
                delay: 7000,
              }}
            >
              <SwiperSlide>
                <HomeHero
                  title="Welcome to PureCube"
                  body="PureCube is a next-generation gaming studio launching its games and developing a unified gaming platform for blockchain games"
                  link="https://medium.com/@pureblock/welcome-to-pureblock-5a78cc85738d"
                  target="_blank"
                  image="/images/001.jpg"
                  imagePosition="right"
                />
              </SwiperSlide>

              <SwiperSlide>
                <HomeHero
                  title="First Block"
                  body="Discover the First Block ecosystem in the PureCube"
                  link="https://pureblock.medium.com/discover-the-first-block-ecosystem-in-the-pureblock-392a7778e9ef"
                  target="_blank"
                  image="/images/002.jpg"
                  imagePosition="bottom"
                />
              </SwiperSlide>
            </Swiper>

            <InfoBlock
              cards={[
                {
                  title: "Marketplace",
                  body: "Trading platform uniting non-fungible token collections of all blockchain games on the PureCube ecosystem.",
                  soon: true,
                  image: "/images/marketplace.png",
                },
                {
                  title: "Platform",
                  body: "PureCube is building a path for blockchain adoption in gaming by providing a platform for players and game developers.",
                  soon: true,
                  image: "/images/platform.png",
                },
              ]}
					  />
          </div>

          <div className="space-y-40 py-40">
            <GamesCards
              title="PureCube Games"
							image="/images/003.jpg"
							subtitle="discover, connect, play, enjoy, earn"
							cards={[
								{
									isVisible: true,
								},
								{
									isVisible: true,
								},
								{
									isVisible: true,
								},
								{
									isVisible: true,
								},
							]}
            />

            <Partners
							title="Partners"
							images={["/icons/near.svg"]}
						/>

            <NewsList
							title="Latest updates & news"
							cards={[
								{
									title: "Discover the First Block ecosystem",
									link: "https://pureblock.medium.com/discover-the-first-block-ecosystem-in-the-pureblock-392a7778e9ef",
									target: "_blank",
									image: "/images/004.png"
								},
								{
									title: "All you need to know about Chubby Runners game",
									link: "/game/chubby-runners",
									image: "/images/006.png"
								},
								{
									title: "Welcome to PureCube. The rise of blockchain gaming",
									link: "https://medium.com/@pureblock/welcome-to-pureblock-5a78cc85738d",
									target: "_blank",
									image: "/images/005.png",
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
