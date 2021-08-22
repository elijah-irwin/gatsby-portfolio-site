import { Link } from 'gatsby';
import React from 'react';


// Components
import Layout from '../components/Layout';

const Landing = () => {
  return (
    <Layout>
      <div>Does this work or what?</div>
      <Link to='/test'>test page</Link>
    </Layout>
  );
};

export default Landing;
