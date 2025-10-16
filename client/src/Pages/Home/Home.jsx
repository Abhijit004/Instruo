import React from "react";
import Hype from "./Hype";
import Hero from "./Hero";
import Timer from "./Timer";
import AboutUs from "./AboutUs";
import Ready from "./Ready";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Timer />
            <Hype />
            <AboutUs />
            {/* <Ready /> */}
            <Gallery />
        </div>
    );
};

export default Home;
