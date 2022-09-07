import React, { useState } from 'react';
import { Card } from './components/Card';
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

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>
          MEMORY GAME <span>by Alexandru Zmău</span>
        </h1>
        <ScoreDisplay score={score} highscore={highscore} />
      </header>
      <div className="board">
        {shapes.map((shape, i) => (
          <Card key={shape.concat(String(i))} shape={shape} />
        ))}
      </div>
    </div>
  );
}

export default App;
