import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { SecondHero } from "widgets/hero";
import { Navbar } from "widgets/navbar";
import { TeamBlock } from "widgets/team-block";
import { ValuesBlock } from "widgets/values-block";

export default function AboutPage() {
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
          <div className="space-y-40 py-40">

            <SecondHero
              title={`Together we are \n one Pure Cube`}
              body="We are all dedicated to revolutionizing how games are made, published, and played"
              image="/images/001.jpg"
              imagePosition="right"
            />

            <ValuesBlock
              title="Why we are here"
              image="/images/007.png"
              body={`These days, opportunities for independent creative processes grow exponentially – you can self-publish a book, run a blog, organize a personal exhibition, or launch a new video game. \n\n The mission of PureCube is to simplify the creation of games by providing game developers and teams tools for collaboration, development, management, and marketing to enable passionate individuals to pursue their dreams with a minimal price to pay in case of failure. Being your boss, working in an inherently aspiring team, and making your vision come true are the factors on which the PureCube is founded. \n\n We create crypto-related games with meaningful purpose and value and, most importantly, focused on players. We work to provide excellent gameplay, superb graphics, and tons of enjoyment for players adding innovations to games. \n\n There’s no simple recipe or magic formula to achieve our dreams. What we do know, however, is that we can not make great products and services without great people. We believe games have the power to bring people around the world together and closer to each other.`}
              cards={[
                {
                  title: "The game above all",
                  body: "The quality of our games is most important to us, and the only way to achieve the best results is by creating the best team that works extremely well together",
                },
                {
                  title: "Create value",
                  body: "We are not just building games and tools; we are designing a universe to create value for our players, developers, and the industry as a whole",
                },
                {
                  title: "Desire innovation",
                  body: "We set our goals ambitiously high and do not shy away from the climb. We are continuously seeking out innovation to succeed here",
                },
              ]}
            />

            <TeamBlock
              title="Advisors"
              cards={[
                {
                  name: "Olga Gi",
                  role: "Advisor, Investment Relations",
                  image: "/images/team/002.png",
                  linkedin: "https://www.linkedin.com/in/olga-gi-zhirova/",
                },
                {
                  name: "EdK",
                  role: "Advisor",
                  image: "/images/team/001.png",
                },
              ]}
            />

            <TeamBlock
              title="Our Team"
              cards={[
                {
                  name: "Ziyod Bekhzodov",
                  role: "Co-Founder, CEO",
                  image: "/images/team/006.png",
                  linkedin: "https://www.linkedin.com/in/bekhzodov",
                },
                {
                  name: "Javokhir Nazarov",
                  role: "Co-Founder, CTO",
                  image: "/images/team/005.png",
                  linkedin: "https://www.linkedin.com/in/nazarov7mu/",
                },
                {
                  name: "Alien Deployer",
                  role: "Co-Founder, Tech Lead",
                  image: "/images/team/003.png",
                  github: "https://github.com/a17",
                },
                {
                  name: "Fozilbek Bekhzodov",
                  role: "Co-Founder, Game Producer",
                  image: "/images/team/004.png",
                  linkedin: "https://www.linkedin.com/in/bekhzodov7mu/",
                  github: "https://github.com/bekhzodov7mu",
                },
                {
                  name: "Mukhammad Botirov",
                  role: "Co-Founder, 3D Team Lead",
                  image: "/images/team/001.png",
                  artstation: "https://www.artstation.com/maxmax17",
                },
                {
                  name: "Denis Kan",
                  role: "Unity Developer",
                  image: "/images/team/008.png",
                  linkedin: "https://www.linkedin.com/in/denis-kan-3b86b0166",
                },
                {
                  name: "Fakhruz Bakhromov",
                  role: "Front-end Developer",
                  image: "/images/team/001.png",
                  linkedin: "https://www.linkedin.com/in/kirademiurge/",
                  github: "https://github.com/kirademiurge",
                },
                {
                  name: "Vladislav Plufix",
                  role: "Community Manager",
                  image: "/images/team/003.png",
                },
                {
                  name: "Diana Khay",
                  role: "2D Artist",
                  image: "/images/team/002.png",
                },
                {
                  name: "Michael Pavlychev",
                  role: "3D Artist",
                  image: "/images/team/005.png",
                },
                {
                  name: "Mansur Vasitov",
                  role: "Unity Developer",
                  image: "/images/team/004.png",
                  linkedin: "https://www.linkedin.com/in/mansur-vasitov/"
                },
              ]}
              others={true}
            />

          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
