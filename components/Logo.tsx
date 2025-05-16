import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-16 h-16 relative">
      <svg width="64" height="67" viewBox="0 0 64 67" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.36804" y="4.09704" width="55.1011" height="58.8059" rx="6.53399" stroke="url(#paint0_linear_1_59)" stroke-width="6.73607"/>
        <path d="M32.1825 17.6999C33.4451 16.4372 35.4924 16.4372 36.755 17.6999L59.237 40.1818L57.2841 51.6609L30.039 24.4159C28.7764 23.1532 28.7764 21.106 30.039 19.8433L32.1825 17.6999Z" fill="url(#paint1_linear_1_59)"/>
        <path d="M30.0568 52.7519C28.7953 54.0134 26.7503 54.0148 25.4872 52.7548L6.39905 33.7156V20.917L32.1233 46.0606C33.4106 47.3189 33.4224 49.3863 32.1496 50.6592L30.0568 52.7519Z" fill="url(#paint2_linear_1_59)"/>
        <defs>
        <linearGradient id="paint0_linear_1_59" x1="30.9186" y1="0.729004" x2="30.9186" y2="66.271" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EBEBEB"/>
        <stop offset="1" stop-color="#858585"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_59" x1="49.2344" y1="30.1793" x2="42.5184" y2="36.8953" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EBEBEB"/>
        <stop offset="1" stop-color="#858585"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_59" x1="13.8729" y1="41.1895" x2="20.5889" y2="34.4735" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EBEBEB"/>
        <stop offset="1" stop-color="#858585"/>
        </linearGradient>
        </defs>
      </svg>

    </div>
  );
};

export default Logo;