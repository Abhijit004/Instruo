import React, { useEffect, useState } from 'react';
import './SingleEvent.css';
import { useParams, useNavigate } from 'react-router-dom';
import CustomAvatar from './CustomAvatar';
import allEvents from '../../assets/events.json';
import { Alert } from 'antd';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';
import { FieldTimeOutlined, EnvironmentOutlined } from '@ant-design/icons';
import PageNotFound from '../PageNotFound/PageNotFound';
import CustomButton from '../../Components/CustomButton/CustomButton';
import RoundsTable from './RoundsTable';
const SingleEvent = () => {
    const { eventID } = useParams();
    const oneEvent = allEvents.find((ev) => ev._id === eventID);

    if (!oneEvent) {
        return <PageNotFound />;
    }

    return (
        <div className="event-single-container">
            {/* Background Image with Overlay */}
            <div
                className="event-single-banner"
                style={{
                    position: `relative`,
                    width: `100%`,
                    minHeight: `300px`,
                    background: `url("${oneEvent?.banner}") no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="event-single-overlay">
                    <div className="eposter">
                        {/* <div className="regfee">Fee ₹ {oneEvent?.registrationFee || "--"}</div> */}
                        <img src={oneEvent.poster} alt={'Poster'} />
                    </div>
                    <div className="event-single-header">
                        <span className="event-single-badge">
                            {oneEvent?.type || 'Type TBD'}
                        </span>
                        <GlitchAnimator text={oneEvent?.name} />
                        <p className="event-single-subtitle">
                            <FieldTimeOutlined /> {oneEvent?.startTime} to{' '}
                            {oneEvent?.endTime}
                        </p>
                        <div className="eposter-mobile">
                            {/* <div className="regfee">Fee ₹ {oneEvent?.registrationFee || "--"}</div> */}
                            <img src={oneEvent.poster} alt={'Poster'} />
                        </div>
                    </div>
                    <div>
                        {oneEvent?.venue && (
                            <div
                                style={{
                                    margin: '1rem 0',
                                    fontSize: '1.5rem',
                                }}
                            >
                                <EnvironmentOutlined /> {oneEvent.venue}
                            </div>
                        )}
                        {oneEvent?.registrationUrl ? (
                            <CustomButton
                                text="Register Now"
                                style={{ margin: '2rem 0' }}
                                onClick={() =>
                                    window.open(
                                        oneEvent?.registrationUrl,
                                        '_blank'
                                    )
                                }
                            />
                        ) : (
                            <Alert
                                message="Register through app"
                                type="info"
                                showIcon
                                style={{
                                    background: 'transparent',
                                    color: '#fff',
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Content Below */}
            <div className="event-single-content">
                <p className="event-single-description">
                    {oneEvent.description}
                </p>
                <ul
                    style={{
                        paddingLeft: '1rem',
                        paddingTop: '2rem',
                        listStyleType: 'none',
                    }}
                >
                    {oneEvent?.description_points?.map((points, index) => {
                        return <li key={index}>{points}</li>;
                    })}
                </ul>
            </div>

            <div
                className="coordinators event-single-content"
                style={{ paddingTop: 0 }}
            >
                <div className="schedule-title">Coordinators</div>
                <div className="coords-list">
                    {oneEvent?.coordinators?.map((e, i) => {
                        console.log('coordinator');
                        console.log(e);
                        return (
                            <CustomAvatar
                                title={e.name}
                                phone={e.phone}
                                src={e.image}
                            />
                        );
                    })}
                </div>
            </div>

            {oneEvent.rounds && (
                <div className="rounds" style={{ padding: '1rem' }}>
                    <div className="schedule-title">Event Rounds</div>
                    <div className="rounds-list">
                        <RoundsTable rounds={oneEvent.rounds} />
                        {oneEvent?._id === 'eofool' && (
                            <span style={{ fontSize: '0.1rem', color: "transparent" }}>
                                EOF{'{f0und_m3_f!nally}'}
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleEvent;
