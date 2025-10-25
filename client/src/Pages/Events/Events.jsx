import React, { useEffect, useState } from "react";
import "./Events.css";
import EventsHero from "./EventsHero";
import DayLeft from "./DayLeft";
import DayRight from "./DayRight";
import eventsData from "../../assets/events.json"; // added import

const Events = () => {
    const [dayOne, setDayOne] = useState([]);
    const [dayTwo, setDayTwo] = useState([]);
    const [dayThree, setDayThree] = useState([]);

    const getEventsData = async () => {
        try {
            // use local JSON instead of fetching into `res`
            const res = { data: eventsData };

            if (res.data) {
                const dayOneTemp = [];
                const dayTwoTemp = [];
                const dayThreeTemp = [];

                res.data.forEach((e) => {
                    const time = e.startTime;

                    // Based on day, push to the appropriate day
                    const day = parseInt(time.slice(0, 2));
                    console.log(day)

                    if (day === 31) {
                        dayOneTemp.push(e);
                    } else if (day === 1) {
                        dayTwoTemp.push(e);
                    } else if (day === 2) {
                        dayThreeTemp.push(e);
                    } else {
                        // Push pre-events to default dayOne
                        dayOneTemp.push(e);
                    }
                });

                // Set states after processing events
                setDayOne(dayOneTemp);
                setDayTwo(dayTwoTemp);
                setDayThree(dayThreeTemp);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getEventsData();
    }, []);

    return (
        <div className="events-page">
            <EventsHero />
            <DayLeft
                events={dayOne}
                day={"one"}
                para={
                    "The dawn of every journey begins with curiosity, a spark that ignites endless possibilities. Embrace the unknown, for today is the start of something extraordinary."
                }
            />
            <DayRight events={dayTwo} />
            <DayLeft
                events={dayThree}
                day={"three"}
                para={
                    "Looking back, we see how far we've come. Ahead lies a path uncharted, waiting for footprints to tell a story only we can create."
                }
            />
        </div>
    );
};

export default Events;
