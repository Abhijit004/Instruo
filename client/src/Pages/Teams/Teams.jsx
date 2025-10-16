import React from "react";
import "./Teams.css";
import teaminfo from "../../assets/Teams/teams.json";
import Member from "../../Components/Member/Member";
import TeamsList from "../../Components/TeamsList/TeamsList";
import { Collapse } from "antd";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";

const CustomExpandIcon = ({ isActive }) => {
    return isActive ? (
        <CaretDownOutlined className="accordion-icon" />
    ) : (
        <CaretRightOutlined className="accordion-icon" />
    );
};

const Teams = () => {
    const items = [];
    for (let team of teaminfo) {
        items.push({
            key: team.id,
            label: team.name,
            children: <TeamsList teamsData={team.members} />,
        });
    }
    return (
        <section className="instruo-team">
            <div className="heading">Meet our <br/><span><GlitchAnimator text={"Supercharged"} styles={{fontSize: "3rem"}} /></span> Team</div>
            <div style={{
                position: 'relative',
                zIndex: '1',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                
            }}>
                <div className="heads">
                    <Member name={"Somename Title"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                    <Member name={"Somename Title"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                    <Member name={"Somename Title"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                    <Member name={"Somename Title"} position={"Professor"} src={"/assets/ProfilePic/profilepic.png"} />
                </div>
            </div>
            <Collapse
                accordion
                items={items}
                bordered={false}
                className="accordion"
                defaultActiveKey={1}
                size="large"
                expandIcon={({ isActive }) => <CustomExpandIcon isActive={isActive} />}
            />
        </section>
    );
};

export default Teams;
