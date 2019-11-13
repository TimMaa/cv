import React from 'react';

export default function Personal({ preview }) {
  return (
    <>
      <h2 className="personal-info" >
        Personal
      </h2>
      {
        !preview &&
        <div>
          Description of my personal life
        </div>
      }
    </>
  );

}