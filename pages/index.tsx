import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { HomeHero } from "widgets/hero";

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
        </Main>
        <Footer />
      </Container>
    </>
  )
}
