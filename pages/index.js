import { Link } from "@mui/material";
import Head from "next/head";
import Exploration from "../src/components/Exploration/Exploration";
import Footer from "../src/components/Footer/Footer";
import Main from "../src/components/Main/Main";
import Navbar from "../src/components/Navbar/Navbar";
import News from "../src/components/News/News";
import MainLayout from "../src/components/ui/MainLayout";
import styles from "../styles/Home.module.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { MainLogo } from "../src/components/Navbar/NavbarIcons";
import favico from "../static/favicon.ico";

export default function Home() {
  return (
    <div>
      <Head>
        <title>K-ATB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <Navbar />
        {/* <Link href="/">
          <ArrowCircleUpIcon className={styles.up}></ArrowCircleUpIcon>
        </Link> */}
        <Main />
        <Exploration />
        <News />
        <Footer />
      </main>
    </div>
  );
}
