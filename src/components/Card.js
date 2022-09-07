import React from 'react';
import cardStyles from '../styles/card.module.css';

export const Card = ({ shape }) => {
  return (
    <div className={cardStyles.card}>
      <img src={`${process.env.PUBLIC_URL}/assets/${shape}.svg`} alt={shape} />
      <p>{shape}</p>
    </div>
  );
};
