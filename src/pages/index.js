import React from 'react';
import Fade from 'react-reveal/Fade';

// Components
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Tools from '../components/Tools/Tools';
import Contact from '../components/Contact/Contact';

const Landing = () => {
  return (
    <Layout>
      <Fade bottom distance='100px' fraction={0.4}>
        <About />
      </Fade>
      <Fade bottom distance='100px' fraction={0.4}>
        <Work />
      </Fade>
      <Fade bottom distance='100px' fraction={0.4}>
        <Tools />
      </Fade>
      <Fade bottom distance='100px' fraction={0.4}>
        <Contact />
      </Fade>
    </Layout>
  );
};

export default Landing;
