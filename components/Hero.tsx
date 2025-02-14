import React from "react";
import Card from "./Card";
import AboutSection from "./AboutSection";

const Hero = () => {
  return (
    <div className="container-section" id="about">
      <div className="flex gap-3 flex-col lg:flex-row ">
        <Card />

        <AboutSection />
      </div>
    </div>
  );
};

export default Hero;
