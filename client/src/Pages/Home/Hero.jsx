import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";

const Hero = () => {
    return (
        <section className="hero">
            <div className="title">
                <GlitchAnimator text="INSTRUO" />
            </div>
            <p className="desc">
                Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge your limits in thrilling
                competitions!
            </p>
            <Link to="/events">
                <CustomButton
                    style={{
                        width: "fit-content",
                        fontWeight: 800,
                    }}
                    text={"EVENTS"}
                />
            </Link>
        </section>
    );
};

export default Hero;
