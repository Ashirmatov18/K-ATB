import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import NewsDetail from "../src/components/NewsPage/NewsDetail";
import Footer from "../src/components/Footer/Footer";

export default function newsdetail() {
  return (
    <div>
      <Head>
        <title>Детали</title>
      </Head>
      <main>
        <Navbar />
        <NewsDetail />
        <Footer />
      </main>
    </div>
  );
}
