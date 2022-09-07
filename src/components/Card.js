import React from 'react';
import cardStyles from '../styles/card.module.css';

export const Card = ({ shape, chooseCard }) => {
  return (
    <div className={cardStyles.card} onClick={() => chooseCard(shape)}>
      <img src={`${process.env.PUBLIC_URL}/assets/${shape}.svg`} alt={shape} />
      <p>{shape}</p>
    </div>
  );
};
