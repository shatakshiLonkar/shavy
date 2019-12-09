import React from "react";
import "./App.css";
import forum from "../src/assets/images/facebook.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={forum} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          New Shavy
        </a>
      </header>
    </div>
  );
}

export default App;
