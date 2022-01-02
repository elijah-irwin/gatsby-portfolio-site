import React from 'react';
import Fade from 'react-reveal/Fade';

// Components
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Tools from '../components/Tools/Tools';
import Contact from '../components/Contact/Contact';
import SectionDivider from '../theme/SectionDivider/SectionDivider';

const Landing = () => {
  return (
    <Layout>
      <Fade bottom distance='100px' fraction={0.4}>
        <About />
        <SectionDivider />
      </Fade>
      <Work />
      <Fade bottom distance='100px' fraction={0.4}>
        <SectionDivider style={{ marginTop: '60px' }} />
        <Tools />
        <SectionDivider />
      </Fade>
      <Contact />
    </Layout>
  );
};

export default Landing;
