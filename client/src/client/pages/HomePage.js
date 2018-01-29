import React from 'react';
import { Helmet } from 'react-helmet'
const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px'}}>
      <Helmet>
        <title>React SSR | Home Page</title>
        <meta property="og:title" content="React SSR | Home Page"/>
      </Helmet>
      <h3>Welcome</h3>
      <p>Check out these awesome features!</p>
    </div>
  );
}

export default {
  component: Home
};