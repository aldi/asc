import React from 'react';

const SVGIcon = ({ icon }) => {
  return (
    <>
      {icon === 'mechanical' && (
        <svg className="custom-svg" viewBox="0 0 512 512">
          <g>
            <path
              opacity=".4"
              d="M322 280.47l-.26.26v0c-42.56-14.54-75.93-48.04-90.31-90.64L18.08 403.4h-.01c-24.63 25.35-24.04 65.87 1.32 90.5 24.83 24.11 64.34 24.11 89.17-.01l213.41-213.42ZM63.35 472.65h-.01c-13.26-.01-24-10.75-24-24 0-13.26 10.74-24 24-24 13.25 0 24 10.74 24 24v0c0 13.25-10.75 24-24 24Z"
            />
            <path d="M469.69 246.2c-40 40-97.48 51-147.72 34.27l-.26.26v0c-42.67-14.57-76.1-48.2-90.41-90.94l.13-.13c-16.54-50.17-5.6-107.71 34.13-147.4h-.01c35.81-35.8 87.76-50.22 136.9-38.01v0c6.44 1.53 10.42 8 8.88 14.45 -.52 2.17-1.64 4.15-3.22 5.73l-74.53 74.48 11.33 68 68.06 11.34 74.53-74.52v-.01c4.66-4.72 12.25-4.76 16.97-.1 1.55 1.54 2.66 3.48 3.19 5.61v0c12.29 49.14-2.14 101.14-38.02 136.91Z" />
          </g>
        </svg>
      )}
      {icon === 'software' && (
        <svg className="custom-svg" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              opacity=".4"
              d="M32 496v0c0 8.83 7.16 15.99 16 15.99h352 -.01c8.83 0 16-7.17 16-16v-48h-384ZM416 0H32h-.01c-17.68 0-32 14.32-32 32 0 0 0 0 0 0v368 0c0 8.83 7.16 15.99 16 15.99h416 -.01c8.83 0 16-7.17 16-16v-368 0c0-17.68-14.33-32-32-32ZM80 356h-.01c-11.05-.01-20-8.96-20-20.01s8.95-20 20-20c11.04 0 20 8.95 19.99 20v0c0 11.04-8.96 20-20 20Zm304-12v0c0 4.41-3.59 8-8 8H232h-.01c-4.42-.01-8-3.59-8-8.01 0 0 0 0 0 0v-16 0c-.01-4.42 3.58-8.01 7.99-8.01h144 -.01c4.41-.01 8 3.58 8 7.99Zm0-120v0c0 17.67-14.33 32-32 32H96l-.01-.01c-17.68-.01-32-14.33-32-32.01 0 0 0 0 0 0v-128 0c-.01-17.68 14.32-32.01 31.99-32.01h256 -.01c17.67-.01 32 14.32 32 31.99Z"
            />
            <path d="M384 224v0c0 17.67-14.33 32-32 32H96l-.01-.01c-17.68-.01-32-14.33-32-32.01 0 0 0 0 0 0v-128 0c-.01-17.68 14.32-32.01 31.99-32.01h256 -.01c17.67-.01 32 14.32 32 31.99Z" />
          </g>
        </svg>
      )}
      {icon === 'human' && (
        <svg className="custom-svg" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              opacity=".4"
              d="M191.35 414.77L208 344l-32-56h96l-32 56 16.65 70.77L224 480ZM224 256l-.01-.01c70.69 0 128-57.31 128-128 0-70.7-57.31-128-128-128.01 -70.7-.01-128 57.3-128.01 127.99v0c0 70.69 57.3 127.99 128 127.99Z"
            />
            <path d="M319.8 288.6L224 480l-95.8-191.4C56.9 292 0 350.3 0 422.4V464v0c0 26.5 21.49 47.99 48 47.99h352l-.01-.01c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8Z" />
          </g>
        </svg>
      )}
    </>
  );
};

export default SVGIcon;
