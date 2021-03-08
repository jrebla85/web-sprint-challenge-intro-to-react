import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Character from './components/Character'

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([]);
  const [currentCharId, setCurrentCharId] = useState(null)

  const openDetails = id => {
    setCurrentCharId(id)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(result => setCharacter(result.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Character />
    </div>
  );
}

export default App;
