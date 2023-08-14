import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Hero />
    </>
  );
};

export default Home;
