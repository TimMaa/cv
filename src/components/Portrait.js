import React from 'react';
import PropTypes from 'prop-types';

export default function Portrait({ imageSizeInPx }) {
  return (
    <img className="portrait" src="/img/portrait.png" alt="Portrait" height={imageSizeInPx} width={imageSizeInPx} style={{ borderRadius: imageSizeInPx / 2 + "px" }} />
  );
}

Portrait.propTypes = {
  imageSizeInPx: PropTypes.number,
};

Portrait.defaultProps = {
  imageSizeInPx: 100,
};