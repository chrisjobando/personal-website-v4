/** @format */

import React from 'react';

import { Navbar } from '&components/Navbar';
import { SocialIcons } from '&components/SocialIcons';

import '&styles/global.sass';
import landing from '&styles/pages/landing.module.sass';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={landing.Section}>
        <h1 className={landing.TitleMessage}>
          Frontend Developer with a strong passion for<span> social good</span>
        </h1>

        <h5 className={landing.Tagline}>
          Currently looking for a new opportunity on a multi-disciplinary product team where accessible design is the
          key to delivering an exceptional product
        </h5>

        <SocialIcons />
      </div>

      <div className={landing.Section}>
        <h1 className={landing.TitleMessage}>¡Hola, soy Chris!</h1>

        <p>
          As a first-generation Hispanic-American and college graduate, I love to give back to the communities that got
          me to where I am now. During my time at Georgia Tech, I have been able to serve the greater-Atlanta area as a
          Latinx in STEM mentor, shelter volunteer, and as a web developer for several nonprofits through my extensive
          involvement with Bits of Good.
        </p>
        <br />
        <p>
          I have over three years of experience with React.js, React Native, TypeScript, JavaScript, Node.js, Python,
          and was a Teaching Assistant for a game-development course in C. I have also taken several courses in User
          Interface Design, Computer Graphics, Computer Animation, and Accessible User Design.
        </p>
        <br />
        <p>
          My experience in front-end development and UX design allows for me to communicate with both designers and
          developers from their perspectives. I have worked on multi-disciplinary teams as a Senior Web Developer,
          Backend Software Engineer, an Accessibility-Focused Designer, and most-recently, as a Native Fullstack
          Application Developer.
        </p>
        <br />
        <p>
          With high standards for user experience, knowledge of WCAG 2.1 compliance requirements, and experience with
          testing frameworks, I have consistently delivered secure, engaging, and accessible digital products.
        </p>
      </div>
    </div>
  );
};

export default Home;
