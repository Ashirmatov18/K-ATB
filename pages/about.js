import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import About from "../src/components/About/About";

export default function about() {
  return (
    <div>
      <Head>
        <title>О нас</title>
      </Head>
      <main>
        <Navbar />
        <About />
      </main>
    </div>
  );
}
