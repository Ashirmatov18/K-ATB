import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Partners from "../src/components/Partners/Partners";
import Footer from "../src/components/Footer/Footer";

export default function partners() {
  return (
    <div>
      <Head>
        <title>Партнеры</title>
      </Head>
      <main>
        <Navbar />
        <Partners />
        <Footer />
      </main>
    </div>
  );
}
