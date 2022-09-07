import React from 'react';
import { Card } from './components/Card';

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

  return (
    <div className="app">
      <header>
        <h1>
          MEMORY GAME <span>by Alexandru Zmău</span>
        </h1>
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
