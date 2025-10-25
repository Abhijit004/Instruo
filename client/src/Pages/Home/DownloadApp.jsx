import { DownloadOurApp } from '../../App';
import './DownloadApp.css';
import "./rainbow-shadow.css";
const DownloadApp = () => {
  return (
    <div className="download-wrapper">
      <div className="block shadow download-app">
        <div className="content">
          <h1>Instruo&nbsp;14</h1>
          <h3>Now in Mobile</h3>
          <p>
            Download the mobile app for Instruo 14 to register for events and
            get all important details.
          </p>
            <img onClick={()=>window.open(DownloadOurApp, "_blank")} className="qrcode" src="/assets/Home/AppQR.png" />
        </div>
        <div className="design">
          <img
            src="/assets/Home/instruo-mockup-mobile.webp"
            alt="Download App"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
