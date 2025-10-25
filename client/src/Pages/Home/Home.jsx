import React from "react";
import Hype from "./Hype";
import Hero from "./Hero";
import Timer from "./Timer";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import DownloadApp from "./DownloadApp";

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <Timer />
            <Hype />
            <AboutUs />
            <Gallery />
            <DownloadApp />
        </div>
    );
};

export default Home;
