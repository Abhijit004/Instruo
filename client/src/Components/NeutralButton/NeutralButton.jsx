import React from "react";
import { Button } from "antd";
import "./NeutralButton.css";

const NeutralButton = ({ text }) => {
    return (
        <button class="super-button">
            <span>{text}</span>
            <svg fill="none" viewBox="0 0 24 24" class="arrow">
                <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="currentColor"
                    d="M5 12h14M13 6l6 6-6 6"
                ></path>
            </svg>
        </button>
    );
};

export default NeutralButton;
