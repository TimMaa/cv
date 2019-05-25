import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

export default function FadeTransition({ children, in: inProp, timeout }) {
  const defaultStyle = {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={inProp} mountOnEnter timeout={timeout}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

FadeTransition.propTypes = {
  in: PropTypes.bool.isRequired,
  child: PropTypes.node.isRequired,
  timeout: PropTypes.number,
};

FadeTransition.defaultProps = {
  timeout: 300,
};