import React from "react";
import Footer from "../src/components/Footer/Footer";
import IssykKul from "../src/components/KyrgyzstanDetails/IssykKul";
import Navbar from "../src/components/Navbar/Navbar";

export default function issyk() {
  return (
    <div>
      <main>
        <Navbar />
        <IssykKul />
        <Footer />
      </main>
    </div>
  );
}
