import React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Tools from '../components/Tools/Tools';
import Contact from '../components/Contact/Contact';

const Landing = () => {
  return (
    <Layout>
      <About />
      <Work />
      <Tools />
      <Contact />
    </Layout>
  );
};

export default Landing;
