import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import MainNews from "../src/components/NewsPage/MainNews";
import Footer from "../src/components/Footer/Footer";

export default function news() {
  return (
    <div>
      <Head>
        <title>Новости</title>
      </Head>
      <main>
        <Navbar />
        <MainNews />
        <Footer />
      </main>
    </div>
  );
}
