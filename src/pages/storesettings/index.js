import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./navbar";
import styled from "styled-components";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Shop Manager | Settings</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Body />
    </>
  );
};

function Body() {
  const { data: session } = useSession();
  console.log(session);
  if (!session) {
    router.push("/signup");
  }

  return (
    <BodyContainer>
      <Navbar />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          {session && (
            <>
              <p>{session.user.email}</p>
              <p>{session.user.name}</p>
              <p>
                <img
                  src={session.user.image}
                  alt="google-account-image"
                  style={{ borderRadius: "50px" }}
                />
              </p>

              <button
                onClick={() => {
                  signOut();
                }}
              >
                signOut
              </button>
            </>
          )}
        </div>
      </div>
    </BodyContainer>
  );
}

export default Home;
