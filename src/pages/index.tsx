/** @format */

import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

// Components
import Layout from '&components/Layout';
import { SocialIcons } from '&components/SocialIcons';
import { SelectedWorks } from '&components/SelectedWorks';
import { WorkExperience } from '&components/WorkExperience';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "Portrait-Illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <Layout title="Home | Christopher Obando" description="Landing Page">
      <div className="Section">
        <h1 className="Title">
          Frontend Developer with a strong passion for <span>social good</span>
        </h1>
        <h2 className="Tagline">
          Currently looking for a new opportunity on a multi-disciplinary product team where accessible design is the
          key to delivering an exceptional product
        </h2>

        <h3>
          <a href="Obando_Chris_Resume.pdf" download="Obando_C_Resume.pdf">
            See my Resume
          </a>
        </h3>

        <SocialIcons />
      </div>

      <div className="About">
        <div className="About-Sub">
          <h1 className="Title">¡Hola, soy Chris!</h1>
          <p>
            As a first-generation Hispanic-American and college graduate, I love to give back to the communities that
            got me to where I am now. During my time at Georgia Tech, I have been able to serve the greater-Atlanta area
            as a Latinx in STEM mentor, shelter volunteer, a web developer for Code for Atlanta, and as a designer for
            several nonprofits through my extensive involvement with Bits of Good.
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
        <div className="About-Img">
          <Img fluid={data.illustration.childImageSharp.fluid} />
        </div>
      </div>

      <WorkExperience />

      <h1 className="Title">Selected Work</h1>
      <SelectedWorks />
    </Layout>
  );
};

export default Index;
