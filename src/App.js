import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Character from './components/Character'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Character />
    </div>
  );
}

export default App;
