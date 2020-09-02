/** @format */

import React from 'react';

// Logo Image
import GithubIcon from '&vectors/github.svg';
import LinkedInIcon from '&vectors/linkedin.svg';
import DribbbleIcon from '&vectors/dribbble.svg';

// Styling
import style from './socialicons.module.sass';

export const SocialIcons = () => {
  return (
    <div className={style.SocialRow}>
      <div className={style.SocialIcon}>
        <a href="https://github.com/chrisjobando" target="_blank" rel="noreferrer" aria-label="Link to GitHub">
          <GithubIcon />
        </a>
      </div>
      <div className={style.SocialIcon}>
        <a href="https://linkedin.com/in/chrisjobando" target="_blank" rel="noreferrer" aria-label="Link to LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
      <a href="https://dribbble.com/chrisjobando" target="_blank" rel="noreferrer" aria-label="Link to Dribbble">
        <DribbbleIcon />
      </a>
    </div>
  );
};
