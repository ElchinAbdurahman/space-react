import React from "react";
import HeroSection from "../components/Herosection/HeroSection";
import HeroSlider from "../components/Herosection/HeroSlider";
import TodayBroadcast from "../components/TodayBroadcast";
import LastBroadcast from "../components/LastBroadcast";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="max-w-[1260px] mx-auto mt-20 ">
        <HeroSection />
        <HeroSlider />
        <TodayBroadcast />
        <LastBroadcast />
      </div>
      <Projects />

    </>
  );
};

export default Home;
