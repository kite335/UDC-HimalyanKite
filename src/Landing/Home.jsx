import React from "react";
import CardCarousel from "../components/CardCarousel.jsx";
import HeroForm from "../components/HeroForm.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";
import CardSection3 from "../components/CardSection3.jsx";

function Home() {
  return (
    <>
      
      <ImageCarousel />
      <HeroForm />
      <CardCarousel />
      <CardSection3 />
    </>
  );
}

export default Home;
