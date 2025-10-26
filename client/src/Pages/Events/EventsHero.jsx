import './EventsHero.css';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import { Button } from 'antd';

const EventsHero = () => {
  const onButtonClick = () => {
    window.open("https://drive.google.com/file/d/12yksndaQCtu3fY74EWEwsj4o5LKrnX3J/view", "_blank");
  };
    return (
        <div className="events-hero">
            <div className="event-bg">
                <img src="/assets/Events/eventbg.webp" alt="" srcset="" />
            </div>
            <GlitchAnimator text="Events" styles={{ fontSize: '5rem' }} />
            <div className="byline">
                Step into the heartbeat of Instruo—our events are crafted to
                captivate, inspire, and challenge you to reach new heights.
                Whether you&apos;re here to compete, learn, or simply be amazed,
                there&apos;s something extraordinary waiting for you. Dive in
                and make every second count!
            </div>
            <Button
                type="primary"
                onClick={onButtonClick}
                size="large"
                icon={<DownloadOutlined />}
                style={{
                  margin: "2rem 0"
                }}
            >
                View full rulebook
            </Button>
        </div>
    );
};
export default EventsHero;
