import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Entert from "../src/components/Enteetainment/Entert";
import Footer from "../src/components/Footer/Footer";

export default function entert() {
  return (
    <div>
      <Head>
        <title>Развлечения</title>
      </Head>
      <main>
        <Navbar />
        <Entert />
        <Footer />
      </main>
    </div>
  );
}
