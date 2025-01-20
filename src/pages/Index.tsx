import React from "react";
import App from "../app/App";

const Index: React.FC = () => {
  return (
    <App>
      <div className="main-page">
        <h1 className="main-page__heading">
          Нажми на кнопки чтобы искать фильмы или увидеть список лайкнутых
        </h1>
        <svg className="main-page__icon"
          width="384"
          height="115"
          viewBox="0 0 384 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2565_64)">
            <path
              d="M198.503 46.5002L196.813 48.343L196.813 48.343L198.503 46.5002ZM330.731 21.8639C330.103 20.634 328.598 20.1456 327.368 20.7731L307.326 30.9986C306.096 31.6261 305.607 33.1318 306.235 34.3616C306.862 35.5915 308.368 36.0799 309.598 35.4524L327.413 26.3631L336.502 44.1784C337.13 45.4083 338.636 45.8966 339.866 45.2691C341.095 44.6416 341.584 43.1359 340.956 41.9061L330.731 21.8639ZM20.9321 82.3198C41.8622 73.9225 60.8918 65.2074 78.228 57.5025C95.6022 49.7808 111.245 43.0876 125.558 38.6364C139.87 34.1854 152.672 32.0358 164.375 33.2671C176.008 34.4909 186.698 39.0696 196.813 48.343L200.192 44.6574C189.309 34.6803 177.625 29.6335 164.898 28.2945C152.241 26.9629 138.699 29.3131 124.073 33.862C109.447 38.4107 93.5582 45.2176 76.1973 52.9335C58.7984 60.6662 39.89 69.3264 19.0703 77.6794L20.9321 82.3198ZM196.813 48.343C218.103 67.8609 245.237 80.9258 270.4 79.4342C283.037 78.6851 295.133 74.2593 305.608 65.196C316.063 56.1497 324.777 42.5946 330.882 23.7713L326.126 22.2287C320.23 40.4061 311.944 53.1014 302.336 61.4149C292.747 69.7113 281.717 73.7545 270.104 74.4429C246.766 75.8264 220.899 63.6408 200.192 44.6574L196.813 48.343Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_2565_64">
              <rect width="384" height="115" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </App>
  );
};

export default Index;
