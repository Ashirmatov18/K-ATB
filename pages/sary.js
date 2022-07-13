import React from "react";
import Footer from "../src/components/Footer/Footer";
import Sary from "../src/components/KyrgyzstanDetails/Sary";
import Navbar from "../src/components/Navbar/Navbar";

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
