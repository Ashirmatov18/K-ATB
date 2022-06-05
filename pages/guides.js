import Head from "next/head";
import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Guides from "../src/components/OrderCars/Guides";

export default function ordercar() {
  return (
    <>
      <Head>
        <title>Гиды</title>
      </Head>
      <main>
        <Navbar />
        <Guides />
        <Footer />
      </main>
    </>
  );
}
