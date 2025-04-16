import React, { useState } from "react";
import "./App.css";

function App() {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [currentFace, setCurrentFace] = useState(null);

  const flipCoin = () => {
    const isHead = Math.random() < 0.5;
    if (isHead) {
      setHeads(prev => prev + 1);
      setCurrentFace("head");
    } else {
      setTails(prev => prev + 1);
      setCurrentFace("tail");
    }
  };

  const totalFlips = heads + tails;
  const headProbability = totalFlips > 0 ? ((heads / totalFlips) * 100).toFixed(2) : 0;

  return (
    <div className="App">
      <h1>🪙 Coin Flip Simulator</h1>
      <div className="coin-container">
        {currentFace && (
          <img
            src={currentFace === "head" ? "/head.jpeg" : "/tail.jpg"}
            alt={currentFace}
            className="coin"
          />
        )}
      </div>
      <button onClick={flipCoin}>Flip Coin</button>
      <div className="stats">
        <p>Heads: {heads}</p>
        <p>Tails: {tails}</p>
        <p>Total Flips: {totalFlips}</p>
        <p>Probability of Heads: {headProbability}%</p>
      </div>
    </div>
  );
}

export default App;
