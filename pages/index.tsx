/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import ToggleContainer from "../components/ToggleContainer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bracket Visualizer</title>
      </Head>
      <main
        css={css`
          min-height: 100vh;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <h1>Bracket Visualizer</h1>
        <ToggleContainer />
      </main>
    </div>
  );
};

export default Home;
