import React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Work from '../components/Work/Work';

const Landing = () => {
  return (
    <Layout>
      <About />
      <Work />
    </Layout>
  );
};

export default Landing;
