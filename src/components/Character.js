// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Character(props) {
    const { charId, close } = props
    const [details, setDetails] = useState(null)

    useEffect (() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(result => setDetails(result.data))
      }, [charId])

      return (
        <div className='container'>
          <h2>Details of {details.name}):</h2>
          <button onClick={close}>Close</button>
        </div>
      )

}