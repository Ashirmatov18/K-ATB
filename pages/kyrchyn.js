import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Kyrchyn from "../src/components/KyrgyzstanDetails/Kyrchyn";

export default function kyrchyn() {
  return (
    <div>
      <main>
        <Navbar />
        <Kyrchyn />
        <Footer />
      </main>
    </div>
  );
}
