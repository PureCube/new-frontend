import Head from "next/head";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { SecondHero } from "widgets/hero";
import { Navbar } from "widgets/navbar";
import { TeamList } from "widgets/team-list";
import { teamListModel } from "widgets/team-list/model";
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
          <div className="space-y-40 pb-40">

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

            <TeamList
              title="Advisors"
              cards=
                {
                  teamListModel.advisors.map( (member) => {
                    return (
                      {
                        name: member.name,
                        role: member.role,
                        image: member.image,
                        linkedin: member.linkedin,
                        github: member.github,
                        artstation: member.artstation,
                      }
                    )
                  })
                }
            />

            <TeamList
              title="Our Team"
              cards=
                {
                  teamListModel.ourTeam.map( (member) => {
                    return (
                      {
                        name: member.name,
                        role: member.role,
                        image: member.image,
                        linkedin: member.linkedin,
                        github: member.github,
                        artstation: member.artstation,
                      }
                    )
                  })
                }
              others={true}
            />

          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
}
