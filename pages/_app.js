import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head></Head>
      </div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
