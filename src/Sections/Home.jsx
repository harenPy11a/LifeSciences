import React from "react";
// import Carousel from "./Carousel";
import Card from "./Card";
import Vision from "./Vision";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
function Home() {
  return (
    <div>
      {/* <Carousel /> */}
      <Hero />
      <Card />
      <Vision />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
