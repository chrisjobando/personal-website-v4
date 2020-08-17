/** @format */

import React from 'react';

// Logo Image
import GlassesIcon from '&vectors/glasses.svg';

// Styling
import style from './navbar.module.sass';

export const Navbar = () => {
  return (
    <div className={style.NavHeader}>
      <GlassesIcon />
      <h2 className={style.NameLink}>Christopher Obando</h2>
    </div>
  );
};
