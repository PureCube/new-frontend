import { AuthCard } from "entities/auth";
import { userModel, UserProfileCard } from "entities/user";
import { WalletCard } from "entities/wallet";
import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useEffect } from "react";
import { Meta } from "shared/model";
import { Container, Main } from "shared/ui";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { Navbar } from "widgets/navbar";

export default observer( function ProfilePage () {
  useEffect( () => {
    if (typeof window !== "undefined") {
      userModel.setJWTtoken(localStorage.getItem("JWTtoken"));
    }
    userModel.fetchUserData();
  }, []);

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
          <div className="space-y-40 py-9 pb-40">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-5">
              <WalletCard />
              {userModel.JWTtoken ? <UserProfileCard /> : <AuthCard />}
            </section>
          </div>
        </Main>

        <Footer />

      </Container>
    </>
  )
} )
