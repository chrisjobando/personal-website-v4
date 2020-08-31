/** @format */
import React from 'react';

// Components
import Layout from '&components/Layout';

// Styling
import style from '&styles/pages.module.sass';

const Ampe = () => {
  return (
    <Layout title="Ampe | Christopher Obando" description="React Native Internship Summer 2020">
      <h1 className={`${style.Title} ${style.Ampe}`}>Ampe</h1>
      <div className={style.SubHead}>
        <div>
          <p>
            <span className={style.Span}>Timeline:</span> 14 weeks, Summer 2020
          </p>
          <p>
            <span className={style.Span}>Role:</span> Fullstack Native Development Intern
          </p>
          <p>
            <span className={style.Span}>Technologies: </span>
            React Native, Apollo, GraphQL, Nexus, Prisma, Styled-Components, PostgreSql
          </p>
          <p>
            <span className={style.Span}>Overview:</span> This Summer, I interned remotely for a startup Social
            Calendaring Application
          </p>
        </div>
      </div>

      <div className={style.Container}>
        <h1 className={`H2 ${style.Header}`}>BACKGROUND</h1>
        <p className={style.FirstText}>
          Ampe is currently in Beta-testing on TestFlight, so I cannot share extensive details about the application.
          That being said, I was able to learn React Native, GraphQL, and Nexus-Prisma to work on both the frontend and
          backend. As a small startup only consisting of four developers, I got to work on core features such as event
          creation, chat rooms, onboarding flow, and infinite scrolling components.
        </p>
      </div>
      <div style={{ marginBottom: 80 }} />
    </Layout>
  );
};

export default Ampe;
