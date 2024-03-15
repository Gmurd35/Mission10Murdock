import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BowlersList from './Bowlers/BowlersList';

function App() {
  return (
    <div className="App">
      <Header />
      <BowlersList />
    </div>
  );
}

export default App;
