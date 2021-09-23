import React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Tools from '../components/Tools/Tools';

const Landing = () => {
  return (
    <Layout>
      <About />
      <Work />
      <Tools />
    </Layout>
  );
};

export default Landing;
