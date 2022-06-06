import React from "react";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import OrderCars from "../src/components/OrderCars/OrderCars";
import Footer from "../src/components/Footer/Footer";

export default function ordercar() {
  return (
    <div>
      <Head>
        <title>Аренда машин</title>
      </Head>
      <main>
        <Navbar />
        <OrderCars />
        <Footer />
      </main>
    </div>
  );
}
