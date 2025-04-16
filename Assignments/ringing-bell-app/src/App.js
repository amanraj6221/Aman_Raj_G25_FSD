import React, { useState } from "react";
import "./App.css";

const colors = ["#f39c12", "#8e44ad", "#1abc9c", "#e74c3c", "#2ecc71", "#3498db", "#d35400"];

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isRinging, setIsRinging] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
 
    const nextColor = colors[(colorIndex + 1) % colors.length];
    setColorIndex((colorIndex + 1) % colors.length);
    setBgColor(nextColor);


    setIsRinging(true);
    setTimeout(() => setIsRinging(false), 1000); 
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="bell-container" onClick={handleClick}>
        <img
          src="/bell.jpeg" 
          alt="Bell"
          className={`bell ${isRinging ? "ring" : ""}`}
        />
        <p>Click the bell to ring & change background!</p>
      </div>
    </div>
  );
}

export default App;
