// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Character(props) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(result => setCharacter(result.data))
    .catch(err => console.log(err))
  }, [])

return (
  <ul>
  {character.map((ch, index) => {
    return (
      <div key={index}>
        {ch.name}
      </div>
    )
  })}
  </ul>
)
}