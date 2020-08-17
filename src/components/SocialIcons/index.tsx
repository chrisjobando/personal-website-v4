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
        <GithubIcon />
      </div>
      <div className={style.SocialIcon}>
        <LinkedInIcon />
      </div>
      <DribbbleIcon />
    </div>
  );
};
