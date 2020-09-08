import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
      </nav>
    </div>
  );
}

export const Home = () => {
  return <div>Home</div>;
};
export const About = () => {
  return <div>About</div>;
};

export default App;
