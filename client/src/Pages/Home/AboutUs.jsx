import React from 'react';
import './AboutUs.css';
// import lamp from "/assets/AboutUsLamp.webp";
// import orb from "/assets/AboutUsOrb.webp";
// import college from "/assets/college.jpg";

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="heading">About Us</div>
            <section className="instruo14">
                <div className="dbox" spanner="instruo">
                    <h2>Instruo 14</h2>
                    <p>
                        INSTRUO, the Annual Technical Fest of IIEST Shibpur, is
                        all about “Driving Innovation.” Since its humble
                        beginnings in 2009, it has grown to become the largest
                        tech-fest in Kolkata and the second largest in Eastern
                        India, a landmark in the region’s technical calendar.
                        <br />
                        <br />
                        This year, we proudly bring to you INSTRUO 2025 – The
                        14th Edition, a grander and more vibrant version of the
                        legacy. With an ever-expanding spectrum of events,
                        INSTRUO promises an experience like no other—ranging
                        from cutting-edge robotics and adrenaline-pumping
                        Robowars to thought-provoking literary contests and
                        engaging workshops led by experts. From coding battles
                        that test logic and skill, to exhibitions that highlight
                        futuristic ideas, and from cultural expressions to
                        high-tech competitions, every moment at INSTRUO is
                        crafted to inspire, challenge, and excite.
                        <br />
                        <br />
                        Join us from October 31st to November 2nd, at the
                        historic IIEST Shibpur campus, and be part of a
                        celebration that promises innovation, excitement, and
                        unforgettable experiences.
                    </p>
                </div>
                <div className="dbox " spanner="instruo2">
                    <h2>Our Mission</h2>
                    <p>
                        INSTRUO plans to achieve a new clean and clear concept
                        of new innovations worldwide and give the young minds a
                        platform to showcase their learnings and teamwork
                        through multiple technical events and activities for
                        this edition we will focus on new events of metaverse
                        and artificial intelligence
                    </p>
                </div>
                <div className="dbox" spanner="instruo2">
                    <h2>Our Objective</h2>
                    <p>
                        IIEST, Shibpur is to become one of the best Institutes
                        in the world in providing the state of-the art
                        multi-disciplinary research ambience that will usher
                        innovative world-class technologies developed towards
                        realizing the goal of developed India. INSTRUO caters
                        the creative and innovative minds of students to
                        augument it into reality.
                    </p>
                </div>
                <div className="dbox" spanner="instruo2">
                    <h2>Our Vision</h2>
                    <p>
                        Since its inception, INSTRUO has always strived towards
                        the goal of exploring ground breaking innovations! The
                        upcoming edition of INSTRUO will only reinforce this
                        very ideology and maneuver in bringing society closer in
                        aspects of technology and innovation. The very crux of
                        INSTRUO 2025 is to provide opportunities to learn and
                        explore the vastness of science and to learn technology
                        and strive for a better tomorrow.
                    </p>
                </div>
            </section>
            <section className="college">
                <div className="left">
                    <h2>IIEST Shibpur</h2>
                    <p>
                        Since its foundation in the mid-19th century, the Indian
                        Institute of Engineering Science and Technology,
                        Shibpur, erstwhile The Bengal Engineering College, is
                        the second oldest engineering college across the Indian
                        subcontinent and has ceaselessly striven hard to
                        contribute to the development of the nation.
                        Acknowledged as an Institute of National Importance,
                        ranked 54th in NIRF 2025 and placed in the 541-560 band
                        of QS Asia Rankings 2025. IIEST has a rich history, and
                        its campus features stunning colonial architecture and
                        verdant surroundings that reflect its profound
                        historical heritage.
                        <br />
                        <br />
                        The institute offers a plethora of festivals, seminars,
                        and events that celebrate diversity, creativity, and
                        innovation. It has an immense alumni base furnishing not
                        only the engineering industry but also across the fields
                        of science, culture, art, and politics. IIEST is
                        recognized for its academic excellence, cutting-edge
                        research, and contributions to engineering and
                        technology. It is renowned for its research output and
                        collaborations with leading industries and academic
                        institutions globally. Their contributions in various
                        sectors foster lasting relationships and drive
                        innovation, strengthening the institute's legacy.
                    </p>
                </div>
                <div className="right">
                    <img
                        src="/assets/Home/instruo-college-pic.svg"
                        alt="college"
                    />
                </div>
            </section>
        </section>
    );
};

export default AboutUs;
