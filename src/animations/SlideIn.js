import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SlideIn = ({ children, delay = 0, flex, ...rest }) => {
  const styles = {
    display: 'flex',
    flexGrow: '1',
  };

  return (
    <Fade
      style={flex ? styles : null}
      triggerOnce
      delay={delay}
      direction='up'
      fraction={0.4}
      {...rest}>
      {children}
    </Fade>
  );
};

export default SlideIn;
