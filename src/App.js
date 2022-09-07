import React, { useState, useEffect } from 'react';
import { Card } from './components/Card';
import { Help } from './components/Help';
import { ScoreDisplay } from './components/ScoreDisplay';

function App() {
  const shapes = [
    'square',
    'circle',
    'rectangle',
    'triangle',
    'ellipse',
    'rhombus',
    'parallelogram',
    'pentagon',
    'hexagon',
    'octagon',
    'star',
    'trapezoid',
  ];

  const shuffle = (arr) => {
    let shuffledArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
      let swapTarget = Math.floor(Math.random() * arr.length);
      [shuffledArr[i], shuffledArr[swapTarget]] = [
        shuffledArr[swapTarget],
        shuffledArr[i],
      ];
    }
    return shuffledArr;
  };

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [visited, setVisited] = useState([]);
  const [cards, setCards] = useState(shuffle(shapes));
  const [help, setHelp] = useState(true);

  const toggleHelp = () => setHelp(!help);

  const chooseCard = (shape) => {
    if (help) return;
    if (visited.includes(shape)) {
      setVisited([]);
      setScore(0);
    } else {
      setVisited([...visited, shape]);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    if (score > highscore) setHighscore(score);
    if (score % 12 === 0) setVisited([]);
    setCards(shuffle(shapes));
  }, [score]);

  return (
    <div className="app">
      <header>
        <h1>
          MEMORY GAME <span>by Alexandru Zmău</span>
        </h1>
        <ScoreDisplay score={score} highscore={highscore} />
        <button onClick={toggleHelp}>?</button>
      </header>
      <Help help={help} toggleHelp={toggleHelp} />
      <div className="board">
        {cards.map((shape, i) => (
          <Card
            key={shape.concat(String(i))}
            shape={shape}
            chooseCard={chooseCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
