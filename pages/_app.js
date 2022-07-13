import "../styles/globals.css";
import Head from "next/head";
import favico from "../static/favicon.ico";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <link rel="shortcut icon" href={favico} type="image/x-icon" />
        </Head>
      </div>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
