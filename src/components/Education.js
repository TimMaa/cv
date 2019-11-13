import React from 'react';

export default function Education({ preview}) {
  return (
    <>
      <h2 className="education-info" >
        Education
      </h2>
      {
        !preview &&
        <div>
          Description of my educational life
        </div>
      }
    </>
  );

}