import React from 'react';

export default function Professional({ preview }) {
  return (
    <>
      <h2 className="professional-info" >
        Professional
      </h2>
      {
        !preview &&
        <div>
          Description of my work life
        </div>
      }
    </>
  );

}