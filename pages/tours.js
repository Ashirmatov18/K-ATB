import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import MainTour from "../src/components/Tour/MainTour";
import Footer from "../src/components/Footer/Footer";

export default function tours() {
  return (
    <div>
      <Head>
        <title>Турфирмы</title>
      </Head>
      <main>
        <Navbar />
        <MainTour />
        <Footer />
      </main>
    </div>
  );
}
