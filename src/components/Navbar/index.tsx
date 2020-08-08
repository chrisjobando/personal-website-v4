/** @format */

import React from 'react';

// Styling
import style from './navbar.module.sass';

const GlassesIcon = () => {
  return (
    <svg width={118} height={48} fill="none">
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M113.466 17.51c1.866 0 2.754.978 2.754 1.867v7.377c0 .978-.977 1.778-1.866 1.778h-.977c-.977 0-1.777-.978-1.777-1.866l.089-7.378c0-.89 0-1.778 1.777-1.778z"
          stroke="#DEBE8F"
          strokeWidth={4}
          strokeMiterlimit={15.118}
        />
        <path
          d="M68.594 23.643c0-2.755-3.82-4.622-9.596-4.71-5.865-.09-9.686 1.688-9.686 3.555"
          stroke="#DEBE8F"
          strokeWidth={6}
          strokeMiterlimit={15.118}
        />
        <path
          opacity={0.55}
          d="M7.106 23.999c0-11.2 9.685-20.09 21.325-20 11.64.089 21.059 9.244 20.97 20.444-.089 11.2-9.685 20.09-21.325 20C16.436 44.266 7.106 35.2 7.106 24zM110.972 24.014c.101-11.144-9.286-20.263-20.965-20.369-11.68-.105-21.23 8.843-21.33 19.987-.1 11.144 9.286 20.263 20.965 20.369 11.68.105 21.23-8.843 21.33-19.987z"
          fill="#A8CCD7"
        />
        <path
          d="M4.53 28.621c-1.867 0-2.755-.889-2.755-1.867l.089-7.377c0-.978.977-1.778 1.865-1.778h.978c.977 0 1.777.978 1.777 1.866l-.089 7.29c0 .977 0 1.866-1.866 1.866z"
          stroke="#DEBE8F"
          strokeWidth={4}
          strokeMiterlimit={15.118}
        />
        <path
          d="M28.165 3.021c11.64 0 21.147 9.511 21.147 21.156 0 11.644-9.507 21.155-21.147 21.155"
          stroke="#DEBE8F"
          strokeWidth={6}
          strokeMiterlimit={15.118}
        />
        <path
          d="M89.742 44.977c11.679 0 21.147-9.472 21.147-21.156S101.421 2.666 89.742 2.666c-11.68 0-21.148 9.471-21.148 21.155 0 11.684 9.468 21.156 21.148 21.156zM42.648 39.643c-3.288 3.111-8.441 5.69-14.572 5.69-9.419-.179-21.059-7.112-20.97-21.334.089-12.8 11.374-21.334 21.325-20.978 6.131.089 10.13 2.667 12.262 4.178"
          stroke="#333"
          strokeWidth={6}
          strokeMiterlimit={15.118}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h118v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Navbar = () => {
  return (
    <div className={style.NavHeader}>
      <GlassesIcon />
      <h1 className={style.NameLink}>Christopher Obando</h1>
    </div>
  );
};
