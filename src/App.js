import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Memory Game
        </h1>
        <h3>
          Match cards win
        </h3>
        <MemoryCard />
      </header>
    </div>
  );
}

export default App;
