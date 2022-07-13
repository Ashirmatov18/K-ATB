import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Sary from "../src/components/KyrgyzstanDetails/Sary";

export default function sary() {
  return (
    <div>
      <main>
        <Navbar />
        <Sary />
        <Footer />
      </main>
    </div>
  );
}
