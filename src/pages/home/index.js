import Head from "next/head";
import Navbar from "./navbar";
import styled from "styled-components";
import HomepageContent from "./HomepageContent";

const BodyContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>Shop Manager | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Body />
    </>
  );
};

function Body() {
  return (
    <BodyContainer>
      <Navbar />
      <HomepageContent />
    </BodyContainer>
  );
}

export default Home;
