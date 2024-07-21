import React from 'react';

const BackgroundCircleShapes = () => {
  return (
    <div className="relative">
      <svg width="156" height="312" viewBox="0 0 156 312" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="156" cy="156" r="156" fill="url(#paint0_linear_1_6)" />
        <defs>
          <linearGradient
            id="paint0_linear_1_6"
            x1="90.7479"
            y1="2.29021e-06"
            x2="212.609"
            y2="285.208"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#FC52A0" stop-opacity="0.76" />
            <stop offset="1" stop-color="#F72585" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute -left-10 bottom-10">
        <svg width="110" height="110" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="69.5" cy="69.5" r="69.5" fill="#D84BC3" fill-opacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundCircleShapes;
