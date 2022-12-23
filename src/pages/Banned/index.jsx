import React from 'react';
import Contact from '../Landing/Contact/Contact';

// Styles
import s from './banned.module.css'

const Banned = () => {
  return (
    <>
      <div className={s.bannedBox}>
        <h2>You couldn't see this page because youe were banned for an administrator</h2>
        <img src="https://res.cloudinary.com/dpnrbius0/image/upload/v1669696799/6318c3b41f00002f009596a2_rkvvyb.jpg" alt="banned" />
      </div>
      <Contact />
    </>
  );
};

export default Banned;