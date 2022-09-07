import React from 'react';
import scoreStyle from '../styles/score.module.css';

export const ScoreDisplay = ({ score, highscore }) => {
  return (
    <div className={scoreStyle.scoreDisplay}>
      <p>Score: {score}</p>
      <p>Highscore: {highscore}</p>
    </div>
  );
};
