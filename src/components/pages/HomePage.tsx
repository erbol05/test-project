import React from "react";
import Welcome from "./homeSections/Welcome";
import Cosy from "./homeSections/Cosy";
import RedWine from "./homeSections/RedWine";
import WiteWine from "./homeSections/WiteWine";
import PinkWine from "./homeSections/PinkWine";
import TastingWine from "./homeSections/TastingWine";
import PopularWine from "./homeSections/PopularWine";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Cosy />
      <RedWine />
      <WiteWine />
      <PinkWine />
      <TastingWine />
      <PopularWine />
    </div>
  );
};

export default HomePage;
