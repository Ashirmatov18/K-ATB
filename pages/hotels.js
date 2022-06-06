import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Hotels from "../src/components/Hotels/Hotels";
import Footer from "../src/components/Footer/Footer";

export default function hotel() {
  return (
    <div>
      <Head>
        <title>Отели</title>
      </Head>
      <main>
        <Navbar />
        <Hotels />
        <Footer />
      </main>
    </div>
  );
}
