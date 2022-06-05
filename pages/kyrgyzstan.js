import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import KyrgyzstanMain from "../src/components/Kyrgyzstan/KyrgyzstanMain";
export default function kyrgyzstan() {
  return (
    <div>
      <Head>
        <title>Кыргызстан</title>
      </Head>
      <main>
        <Navbar />
        <KyrgyzstanMain />
      </main>
    </div>
  );
}
