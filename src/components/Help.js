import React from 'react';
import helpStyles from '../styles/help.module.css';

export const Help = ({ help, toggleHelp }) => {
  return (
    <div className={`${helpStyles.help} ${help ? '' : helpStyles.hidden}`}>
      <h4>How to play</h4>
      <button onClick={toggleHelp}>X</button>
      <hr></hr>
      <ul>
        <li>You must choose a card that hasn't been choosen yet.</li>
        <li>
          Choosing a card that has already been choosen will make you lose.
        </li>
        <li>Choosing a card for the first time will bring you points.</li>
        <li>
          Every 12 points scored, all the visited cards will reset, allowing you
          to start again.
        </li>
      </ul>
    </div>
  );
};
