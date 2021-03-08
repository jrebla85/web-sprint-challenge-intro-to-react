// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Character = (props) => {
    const { charId, close } = props
    const [details, setDetails] = useState(null)

    useEffect (() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(result => setDetails(result.data))
      }, [charId])

      return (
        <div className='container'>
          <h2>Details of {charId}):</h2>
          {
            details &&
            <>
              <p>{details.name} is {details.age}</p>
              <p>email is {details.email}</p>
              {details.name} likes:
              <ul>
                {details.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
              </ul>
            </>
          }
          <button onClick={close}>Close</button>
        </div>
      )

}

export default Character