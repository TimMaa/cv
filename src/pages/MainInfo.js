import React from 'react';

import TextCard from '../components/TextCard';
import Personal from '../components/Personal';
import Professional from '../components/Professional';
import Education from '../components/Education';
import Other from '../components/Other';

function MainInfo() {
  return (
    <div className="main-info">
      <div className="categories">
        <div className="personal">
          <Personal />
        </div>
        <div className="professional">
          <Professional />
        </div>
        <div className="education">
          <Education />
        </div>
        <div className="other">
          <Other />
        </div>
      </div>
      <div>
        <TextCard text="Tim Maaßen" />
      </div>
      <div className="copyright">by Tim Maaßen - 2019</div>
    </div>
  );
}

export default MainInfo;