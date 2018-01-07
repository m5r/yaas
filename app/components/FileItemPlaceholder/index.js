/**
 *
 * FileItemPlaceholder
 *
 */

import React from 'react';

const idClip = 'idClip';
const idGradient = 'idGradient';

const FileItemPlaceholder = () => (
  <svg width='90%' height='60' xmlns='http://www.w3.org/2000/svg' version='1.1'>
    <rect
      style={{ fill: `url(#${idGradient})` }}
      clipPath={`url(#${idClip})`}
      x='0'
      y='0'
      width='100%'
      height='60'
    />
    <defs>
      <clipPath id={idClip}>
        <rect x='0' y='0' rx='2' ry='2' width='80' height='60' />
        <rect x='97' y='13' rx='3' ry='3' width='230' height='13' />
        <rect x='97' y='37' rx='3' ry='3' width='300' height='11' />
      </clipPath>
      <linearGradient id={idGradient}>
        <stop offset='0%' stopColor='#ecebeb'>
          <animate
            attributeName='offset'
            values='-2; 1'
            dur='2s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='50%' stopColor='#f3f3f3'>
          <animate
            attributeName='offset'
            values='-1.5; 1.5'
            dur='2s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='100%' stopColor='#ecebeb'>
          <animate
            attributeName='offset'
            values='-1; 2'
            dur='2s'
            repeatCount='indefinite'
          />
        </stop>
      </linearGradient>
    </defs>
  </svg>
);

export default FileItemPlaceholder;
