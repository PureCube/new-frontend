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
import { GamesCards } from "widgets/games";
import { Partners } from "widgets/partners";
import { NewsList } from "widgets/news-list";
import { newsListModel } from "widgets/news-list/model";

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
              {
                newsListModel.newsList.slice(-7).map ( (news, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <HomeHero
                        title={news.title}
                        body={news.body}
                        link={news.link}
                        target={news.target}
                        image={news.image}
                        imagePosition={news.imagePosition}
                      />
                    </SwiperSlide>
                  )
                })
              }
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
							image="/images/games-cards/001.jpg"
							subtitle="discover, connect, play, enjoy, earn"
							cards={[
								{
                  image: "/images/games-cards/002.png",
								},
								{
									image: "/images/games-cards/003.png",
								},
								{
									image: "/images/games-cards/004.png",
								},
								{
									image: "/images/games-cards/005.png",
								},
							]}
            />

            <Partners
							title="Partners"
							images={["/icons/near.svg"]}
						/>

            <NewsList
							title="Latest updates & news"
						/>
          </div>

        </Main>

        <Footer />

      </Container>
    </>
  )
}
