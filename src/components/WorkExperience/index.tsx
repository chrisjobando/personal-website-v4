/** @format */

import React from 'react';

import { experience } from './experience';

import style from './workexperience.module.sass';

interface WorkObject {
  date: string;
  role: string;
  title: string;
}

const WorkObject = ({ date, title, role }: WorkObject) => (
  <div className={style.ExperienceContainer}>
    <div className={style.ExperienceTopLine}>
      <h2 className="H4">{title}</h2>
      <h3 className={`${style.ExperienceDate} H5`}>{date}</h3>
    </div>
    <h4 className="H5">{role}</h4>
  </div>
);

export const WorkExperience = () => (
  <div className={style.ExperienceHeader}>
    <h1 className="H3">Work Experience</h1>
    <div className={style.HeaderDivider} />

    <div className={style.ExperiencesRow}>
      {experience.map(job => (
        <WorkObject key={job.id} date={job.date} role={job.role} title={job.title} />
      ))}
    </div>

    <h5 className={style.ConnectText}>
      <a href="https://linkedin.com/in/chrisjobando" target="_blank" rel="noreferrer">{`Let's connect on LinkedIn!`}</a>
    </h5>
  </div>
);
