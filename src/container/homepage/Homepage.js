import React from "react";
import Hero from "../../component/hero/Hero";
import Moviecards from "../../component/moviecards/Moviecards";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="App">
      <Hero />
      <Moviecards />
    </div>
  );
}

export default Homepage;
