import React from "react";

const Bwaves = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 150 1440 320">
    <defs>
      <filter id="dropShadow" x="-20%" y="-20%" width="150%" height="150%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
        <feOffset in="blur" dx="0" dy="5" result="offsetBlur" />
        <feFlood floodColor="black" floodOpacity="0.5" />
        <feComposite in2="offsetBlur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      fill="#D2F6D5"
      fillOpacity="1"
      filter="url(#dropShadow)"
      d="M0,288L80,293.3C160,299,320,309,480,282.7C640,256,800,192,960,186.7C1120,181,1280,235,1360,261.3L1440,
    288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    ></path>
  </svg>
);

export default Bwaves;
