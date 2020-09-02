/** @format */

import React from 'react';
import { Link } from 'gatsby';

// Logo Image
import GlassesIcon from '&vectors/glasses.svg';

// Styling
import style from './navbar.module.sass';

export const Navbar = () => {
  return (
    <div className={style.NavHeader}>
      <Link to="/" aria-label="Link to Home Page">
        <GlassesIcon />
      </Link>

      <h2 className={style.NameLink}>Christopher Obando</h2>
    </div>
  );
};
