import React from 'react';

function MainInfo() {

  const imageSizeInPx = 100;

  return (
    <img className="portrait" src="/img/portrait.png" alt="Portrait" style={{ borderRadius: imageSizeInPx / 2 + "px" }} />
  );
}

export default MainInfo;