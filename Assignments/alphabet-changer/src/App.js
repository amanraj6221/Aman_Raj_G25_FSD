import React, { useState } from "react";
import "./App.css";

function App() {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [index, setIndex] = useState(0);

  const nextAlphabet = () => {
    setIndex((index + 1) % alphabets.length); // Loop from A to Z
  };

  return (
    <div className="app">
      <h1>🔤 Alphabet Changer</h1>
      <div className="alphabet">{alphabets[index]}</div>
      <button onClick={nextAlphabet}>Next Alphabet</button>
    </div>
  );
}

export default App;
