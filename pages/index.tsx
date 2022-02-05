import type { NextPage } from "next";
import Head from "next/head";
import BracketContainer from "../components/BracketContainer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bracket Visualizer</title>
      </Head>
      <main className={styles.main}>
        <h1>Bracket Visualizer</h1>
        <BracketContainer />
      </main>
    </div>
  );
};

export default Home;
