import React from 'react';
import helpStyles from '../styles/help.module.css';

export const Help = ({ help, toggleHelp }) => {
  return (
    <div className={`${helpStyles.help} ${help ? '' : helpStyles.hidden}`}>
      <h4>How to play</h4>
      <button onClick={toggleHelp}>X</button>
      <hr></hr>
      <ul>
        <li>
          The game consists of multiple game cycles, each one lasting until all
          the cards have been clicked on once.
        </li>
        <li>Clicking on a card for the first time will bring you points.</li>
        <li>
          If you click a card for the second time in the same game cycle, the
          game will restart.
        </li>
        <li>
          Once a game cycle ends, all the cards that have been clicked reset,
          allowing you to click on them again.
        </li>
      </ul>
    </div>
  );
};
