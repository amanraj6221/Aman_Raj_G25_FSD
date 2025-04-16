import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Life from "./components/Life";
import Forest from "./components/Forest";
import Car from "./components/Car";
import Mountain from "./components/Mountain";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/life">Life</Link>
          <Link to="/forest">Forest</Link>
          <Link to="/car">Car</Link>
          <Link to="/mountain">Mountain</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<Life />} />
          <Route path="/forest" element={<Forest />} />
          <Route path="/car" element={<Car />} />
          <Route path="/mountain" element={<Mountain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
