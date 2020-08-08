/** @format */

import React from 'react';
import '../assets/styles/styles.sass';
import { Navbar } from '../components/Navbar';

const Home = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <h1>{`HOLA, I'M CHRIS!`}</h1>
      <h3>Frontend Developer and User Experience Designer in ATL</h3>
      <p>
        I’m a software engineer with a passion for social good. My experience in front-end development and UX design
        allows for me to communicate with both designers and developers from their perspectives. I’m looking for a new
        opportunity in a multi-disciplinary product team where universal design is the key to delivering an exceptional
        product. Currently a rising senior at Georgia Tech
      </p>
    </div>
  );
};

export default Home;
