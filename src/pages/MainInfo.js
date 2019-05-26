import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import TextCard from '../components/TextCard';
import Personal from '../components/Personal';
import Professional from '../components/Professional';
import Education from '../components/Education';
import Other from '../components/Other';

function MainInfo() {

  const [ active, setActive ] = useState(false);
  let hovering = false;
  let registeredLeave = null;

  const duration = 300;
  const distance = -300;
  
  const defaultStyle = ({ dir1, dir2 }) => ({
    transition: `${dir1} ${duration}ms ease-in-out,${dir2} ${duration}ms ease-in-out`,
    [dir1]: `${distance}px`,
    [dir2]: `${distance}px`,
  });
  
  const transitionStyles = ({ dir1, dir2 }) => ({
    entering: { [dir1]: '0px', [dir2]: '0px' },
    entered: { [dir1]: `${distance}px`, [dir2]: `${distance}px` },
    exiting: { [dir1]: `${distance}px`, [dir2]: `${distance}px` },
    exited: { [dir1]: '0px', [dir2]: '0px' },
  });

  const handleHoverStart = () => {
    setActive(true); 
    hovering = true;
  }

  const handleHoverEnd = () => {
    hovering = false;
    window.clearTimeout(registeredLeave);
    registeredLeave = setTimeout(() => {
      if(!hovering) setActive(false);
    }, 2000);
  }

  return (
    <div className="main-info">
      <div className="categories">
        <Transition in={active} timeout={0}>
          {state => (
            <div className="personal" style={{
              ...defaultStyle({ dir1: 'top', dir2: 'left' }),
              ...transitionStyles({ dir1: 'top', dir2: 'left' })[state]
            }}>
              <Personal />
            </div>
          )}
        </Transition>
        <Transition in={active} timeout={0}>
          {state => (
            <div className="professional" style={{
              ...defaultStyle({ dir1: 'top', dir2: 'right' }),
              ...transitionStyles({ dir1: 'top', dir2: 'right' })[state]
            }}>
              <Professional />
            </div>
          )}
        </Transition>
        <Transition in={active} timeout={0}>
          {state => (
            <div className="education" style={{
              ...defaultStyle({ dir1: 'bottom', dir2: 'left' }),
              ...transitionStyles({ dir1: 'bottom', dir2: 'left' })[state]
            }}>
              <Education />
            </div>
          )}
        </Transition>
        <Transition in={active} timeout={0}>
          {state => (
            <div className="other" style={{
              ...defaultStyle({ dir1: 'bottom', dir2: 'right' }),
              ...transitionStyles({ dir1: 'bottom', dir2: 'right' })[state]
            }}>
              <Other />
            </div>
          )}
        </Transition>
      </div>
      <div 
        onMouseOver={handleHoverStart} 
        onMouseLeave={handleHoverEnd}
      >
        <TextCard text="Tim Maaßen" />
      </div>
      <div className="copyright">by Tim Maaßen - 2019</div>
    </div>
  );
}

export default MainInfo;