import React from 'react';

export default function Other({ preview }) {
  return (
    <>
      <h2 className="other-info" >
        Other
      </h2>
      {
        !preview &&
        <div>
          Description of my extracurriculars
        </div>
      }
    </>
  );

}