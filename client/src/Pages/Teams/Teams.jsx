import React from 'react';
import './Teams.css';
import teaminfo from '../../assets/Teams/teams.json';
import Member from '../../Components/Member/Member';
import TeamsList from '../../Components/TeamsList/TeamsList';
import { Collapse } from 'antd';
import { CaretRightOutlined, CaretDownOutlined, TeamOutlined } from '@ant-design/icons';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';
import {
  CrownOutlined,
  DollarOutlined,
  GiftOutlined,
  RocketOutlined,
  RobotOutlined,
  CarOutlined,
  CodeOutlined,
  MobileOutlined,
  PictureOutlined,
  NotificationOutlined,
  HeartOutlined,
} from '@ant-design/icons';

const GetTeamIcon = ({ teamName }) => {
  const name = teamName.toLowerCase();

  if (name === 'main coordinator') return <CrownOutlined />;
  if (name === 'joint coordinator') return <TeamOutlined />;
  if (name === 'finance') return <DollarOutlined />;
  if (name === 'sponsorship') return <GiftOutlined />;
  if (name === 'event') return <RocketOutlined />;
  if (name === 'robodarshan') return <RobotOutlined />;
  if (name === 'travel and logistics') return <CarOutlined />;
  if (name === 'web development') return <CodeOutlined />;
  if (name === 'app development') return <MobileOutlined />;
  if (name === 'design and content') return <PictureOutlined />;
  if (name === 'publicity') return <NotificationOutlined />;
  if (name === 'volunteer') return <HeartOutlined />;

  return <TeamOutlined />;
};

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
      label: <div className='teamheading'>{GetTeamIcon({ teamName: team.name })} {team.name}</div>,
      children: <TeamsList teamsData={team.members} />,
    });
  }
  return (
    <section className="instruo-team">
      <div className="team-bg">
        <img src="/assets/Team/team.png" alt="" srcset="" />
      </div>
      <div className="heading">
        Meet our <br />
        <span>
          <GlitchAnimator text={'Supercharged'} styles={{ fontSize: '3rem' }} />
        </span>{' '}
        Team
      </div>
      <p>
        Welcome to the heart of our techfest! This page introduces the dedicated
        minds, the innovators, and the organizers who bring this entire event to
        life. We are a diverse group of students and enthusiasts, united by a
        shared passion for technology, learning, and building a vibrant
        community. Every successful event is the result of countless hours of
        planning and execution, and we are proud to present the individuals
        driving this year's festival.
      </p>
      <div
        style={{
          position: 'relative',
          zIndex: '1',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="head">
          <span>Convenor</span>
          <div className="heads">
            <Member
              name={'Shyamalendu Kandar'}
              position={'Assistant Professor'}
              src={'/assets/Team/shyamalendu_kandar.webp'}
            />
          </div>
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
        expandIconPosition={'end'}
      />
    </section>
  );
};

export default Teams;
