import React from "react";

const Search: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <defs>
        <mask id="ipSSearch0">
          <g fill="none" strokeLinejoin="round" strokeWidth="4">
            <path
              fill="#fff"
              stroke="#fff"
              d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343"
            />
            <path
              stroke="#fff"
              strokeLinecap="round"
              d="m33.222 33.222l8.485 8.485"
            />
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSearch0)" />
    </svg>
  );
};

export default Search;