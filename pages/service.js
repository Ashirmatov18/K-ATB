import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";
import Service from "../src/components/Service/Service";

export default function service() {
  return (
    <>
      <Head>
        <title>Услуги</title>
      </Head>
      <main>
        <Navbar />
        <Service />
        <Footer />
      </main>
    </>
  );
}
