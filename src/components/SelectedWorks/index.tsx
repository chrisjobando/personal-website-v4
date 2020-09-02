/** @format */

import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link, useStaticQuery } from 'gatsby';

import styles from './selectedworks.module.sass';

import { works } from './works';

import { GetFixedImageQuery } from '../../../types/graphql';

export const SelectedWorks = () => {
  const { musicMatch, ampe, liv2bgirl } = useStaticQuery<GetFixedImageQuery>(graphql`
    query GetFixedImage {
      musicMatch: file(relativePath: { eq: "MusicMatchDemo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      ampe: file(relativePath: { eq: "Ampe.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      liv2bgirl: file(relativePath: { eq: "Liv2BGirlDemo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <div>
      <div key={works[0].id} className={`${styles[works[0].size]} ${styles[works[0].colors]}`}>
        <div className={styles.WorkTileContents}>
          <div className={styles.LargeImage}>
            {musicMatch && musicMatch.childImageSharp && musicMatch.childImageSharp.fluid && (
              <Img
                fluid={musicMatch.childImageSharp.fluid}
                alt="MusicMatch Landing Page Mockup on Macbook Pro and iPhone"
              />
            )}
          </div>

          <div className={styles.TextContainer}>
            <h1 className="H2">{works[0].stack}</h1>
            <h2 className={`${styles.Title} H1`}>{works[0].title}</h2>
            <h3 className="H2">{works[0].role}</h3>
            <Link to={works[0].linkTarget} aria-label={`Link to ${works[0].linkTarget}`}>
              <p>{works[0].link}</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.SmallTileRow}>
        {works.slice(1, 3).map(work => (
          <div key={work.id} className={`${styles[work.size]} ${styles[work.colors]}`}>
            <div className={styles.WorkTileContents}>
              {work.id === 'Work_2' && ampe && ampe.childImageSharp && ampe.childImageSharp.fluid && (
                <div className={styles.SmallImage1}>
                  <Img fluid={ampe.childImageSharp.fluid} alt="Ampe Logo - Black Version" />
                </div>
              )}
              {work.id === 'Work_3' && liv2bgirl && liv2bgirl.childImageSharp && liv2bgirl.childImageSharp.fluid && (
                <div className={styles.SmallImage2}>
                  <Img fluid={liv2bgirl.childImageSharp.fluid} alt="Liv2BGirl Profile Screen - Tilted iPhone Mockup" />
                </div>
              )}
              <div className={styles.TextContainer}>
                <h1 className="H2">{work.stack}</h1>
                <h2 className={`{styles.Title} H1`}>{work.title}</h2>
                <h3 className="H2">{work.role}</h3>
                <Link to={work.linkTarget} aria-label={`Link to ${work.linkTarget}`}>
                  <p>{work.link}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
