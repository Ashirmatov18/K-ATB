import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Cafe from "../src/components/Cafe/Cafe";
import Footer from "../src/components/Footer/Footer";

export default function cafe() {
  return (
    <div>
      <Head>
        <title>Кафе и Рестораны</title>
      </Head>
      <main>
        <Navbar />
        <Cafe />
        <Footer />
      </main>
    </div>
  );
}
