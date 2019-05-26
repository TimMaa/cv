import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import TextCard from '../components/TextCard';
import Personal from '../components/Personal';
import Professional from '../components/Professional';
import Education from '../components/Education';
import Other from '../components/Other';

function MainInfo() {

  const [ active, setActive ] = useState(false);

  const duration = 300;
  
  const defaultStyle = (dir1, dir2) => ({
    transition: `${dir1} ${duration}ms ease-in-out,${dir2} ${duration}ms ease-in-out`,
    [dir1]: '-200px',
    [dir2]: '-200px'
  });
  
  const transitionStyles = (dir1, dir2) => ({
    entering: { [dir1]: '0px', [dir2]: '0px' },
    entered: { [dir1]: '-200px', [dir2]: '-200px' },
    exiting: { [dir1]: '-200px', [dir2]: '-200px' },
    exited: { [dir1]: '0px', [dir2]: '0px' },
  });

  console.log(transitionStyles('top', 'left'));

  return (
    <div className="main-info">
      <div className="categories">
        <Transition in={active} timeout={duration}>
          {state => (
            <div className="personal" style={{
              ...defaultStyle('top', 'left'),
              ...transitionStyles('top', 'left')[state]
            }}>
              <Personal />
            </div>
          )}
        </Transition>
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
      <div onMouseOver={() => setActive(true)} onMouseLeave={() => setActive(false)}>
        <TextCard text="Tim Maaßen" />
      </div>
      <div className="copyright">by Tim Maaßen - 2019</div>
    </div>
  );
}

export default MainInfo;