import { useState, useEffect } from 'react';
import PreloaderSVG from './PreloaderSVG';
import './Preloader.css';

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  if (true) {
    return (
      <div className="preloader">
        <PreloaderSVG key={Date.now()} />
        {/* <div className="bulb"></div> */}
      </div>
    );
  }
};

export default Preloader;
