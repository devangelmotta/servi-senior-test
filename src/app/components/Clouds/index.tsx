/**
 *
 * Clouds
 *
 */
import React from 'react';
import './index.css';
interface Props {}

export default function Clouds(props: Props) {
  return (
    <>
      <div id="cloud-circle"></div>
      <svg width="0" height="0"> 
        <filter id="filter">
          <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
          <feDisplacementMap in="SourceGraphic" scale="180" />
        </filter>
      </svg>
    </>
    );
}
