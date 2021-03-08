import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
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

  const Person = props => (
    <div className="character">
      {props.info.name}
      <button onClick={() => openDetails(props.info.id)}>
        Character Info
      </button>
    </div>
  )

  return (
    <div className="App">
      <h1 className="Header"> Noteable Star Wars Characters</h1>
      {character.map((ch, index) => {
        return (
          <div key={index}>
            {ch.name}
          </div>
        )
      })}
      {
        currentCharId && <Character charId={currentCharId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
