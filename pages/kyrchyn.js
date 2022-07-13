import React from "react";
import Footer from "../src/components/Footer/Footer";
import Kyrchyn from "../src/components/KyrgyzstanDetails/Kyrchyn";
import Navbar from "../src/components/Navbar/Navbar";

export default function kashkasuu() {
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
