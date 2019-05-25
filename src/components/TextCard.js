import React from 'react';
import PropTypes from 'prop-types'

export default function TextCard({ text, className }) {
  return (
    <div className={className ? `text-card ${className}` : 'text-card'} >
      <h1>{text}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" display="none">
        <filter id="squiggle">
          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="8" result="turbulence"> 
            <animate attributeName="seed" from="1" to="10" dur="1s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" />
        </filter>
      </svg>
    </div>
  );
}

TextCard.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

TextCard.defaultProps = {
  className: null,
};