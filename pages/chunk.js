import React from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Chunk from "../src/components/KyrgyzstanDetails/Chunk";

export default function chunk() {
  return (
    <div>
      <main>
        <Navbar />
        <Chunk />
        <Footer />
      </main>
    </div>
  );
}
