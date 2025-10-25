import { DownloadOurApp } from "../../App";
import "./Footer.css";
import logo from "/logo.svg";
import {
    PhoneFilled,
    MailFilled,
    FacebookFilled,
    LinkedinFilled,
    InstagramFilled,
} from "@ant-design/icons";
// import ButtonGroup from "antd/es/button/button-group";

const main = [
    { number: "+91-7549530584", name: "Ayush Tejaswi" },
    { number: "+91-6291290730", name: "Satish Gupta" },
    { number: "+91-9481961973", name: "Aaratrika Sarkar" },
];
const sponsors = [
    { number: "+91-8115592004", name: "Shivansh Mahobiya" },
    { number: "+91-9462480435", name: "Sujan Sharma" },
    { number: "+91-9784628312", name: "Pranjal Batesar" },
];
const convenors = [
    {
        number: "+91-7003198150",
        name: "Dr. Shyamalendu Kandar",
        email: "shyamalenduk@it.iiests.ac.in",
    },
];
const people = [main, sponsors, convenors];
const groupNames = ["Main Coordinators", "Sponsorship", "Convenors"];
const socials = [
    {
        url: "mailto:sponsorship.instruo@gmail.com",
        src: MailFilled,
        alt: "mail",
    },
    {
        url: "https://www.facebook.com/instruo.iiests",
        src: FacebookFilled,
        alt: "Facebook",
    },
    {
        url: "https://www.instagram.com/instruo_iiests?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        src: InstagramFilled,
        alt: "Instagram",
    },
    {
        url: "https://www.linkedin.com/company/instruo-iiests/",
        src: LinkedinFilled,
        alt: "Linkedin",
    },
];

const PersonDetails = ({ name, phone, email }) => {
    return (
        <div className="person-name">
            <span>{name}</span>
            <span style={{ color: "hsla(218, 11%, 65%, 0.7)", fontSize: '0.8rem' }}>
                <PhoneFilled />
                {" "}
                {phone}
            </span>
            {email && (
                <span style={{ color: "hsla(218, 11%, 65%, 0.7)", fontSize: '0.8rem' }}>
                    <MailFilled />
                    {"  "}
                    {email}
                </span>
            )}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="nf">
            <div className="nf-topdesign"></div>
            <div className="fcontent">
                <div className="about-instruo">
                    <div className="heading">
                        <img src={logo} alt="instruo logo" />
                        INSTRUO
                    </div>
                    <p>
                        Kolkata's largest tech festival, where innovation meets
                        excellence. Join us to experience the pinnacle of
                        technology, creativity, and learning!
                    </p>

                    <button onClick={()=>window.open(DownloadOurApp, "_blank")} className="apk"><img src="/assets/github-icon.svg" />Download the app</button>

                    <div style={{ marginTop: "1.5rem", fontSize: "1.2rem" }}>
                        Socials
                    </div>
                    <div className="social">
                        {socials.map((connect, i) => {
                            return (
                                <a href={connect.url} alt={connect.alt} key={i}>
                                    <connect.src
                                        style={{ fontSize: "1.3rem" }}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className="people">
                    <div className="content">
                        {people.map((p, i) => {
                            return (
                                <div key={i} className="peoplebox">
                                    <span
                                        style={{
                                            fontSize: "1.2rem",
                                            color: "#9ca3af",
                                            display: "block",
                                            fontWeight: 600,
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {groupNames[i]}
                                    </span>
                                    {p.map((e, ii) => {
                                        return (
                                            <PersonDetails
                                                name={e.name}
                                                phone={e.number}
                                                key={10 * (i + 1) + (ii + 1)}
                                                email={e.email}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="nf-end">
                <p>Copyright © 2025 Instruo. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
