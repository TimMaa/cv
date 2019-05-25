import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

export default function FlyOutTransition({ children, direction, in: inProp, timeout }) {
  const defaultStyle = {
    transition: `margin-top ${timeout}ms ease-in-out`,
    marginTop: '-100vh',
  };

  const transitionStyles = {
    entering: { marginTop: '-100vh' },
    entered: { marginTop: 0 },
    exiting: { marginTop: 0 },
    exited: { marginTop: '-100vh' }
  };

  return (
    <Transition in={inProp} timeout={0} classNames={`fly-${direction}`}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  );
}

FlyOutTransition.propTypes = {
  direction: PropTypes.string,
  in: PropTypes.bool.isRequired,
  timeout: PropTypes.number,
};

FlyOutTransition.defaultProps = {
  direction: 'top',
  timeout: 300,
};