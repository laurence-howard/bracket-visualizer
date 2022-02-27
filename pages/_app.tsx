import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/bracket-favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
