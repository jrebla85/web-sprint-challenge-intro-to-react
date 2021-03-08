// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Character() {

  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(result => setCharacter(result.data))
    .catch(err => console.log(err))
  }, [])
  
  return(
    <div>
    {character.map((ch, index) => {
      return(
        <ul>
          <li key={index}>
            Name: {ch.name}
              <ul>
                <li className="stats">
                 Birth Year: {ch.birth_year} 
                </li>
                <li className="stats">
                  Sex: {ch.gender}
                </li>
                <li className="stats">
                  Height {ch.height}
                </li>
              </ul>
            </li>
        </ul>
      )
    })}
    </div>
  )
}