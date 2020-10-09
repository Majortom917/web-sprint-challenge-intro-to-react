import React, { useState,useEffect } from 'react';
import Character from "./components/Character"
import './App.css';
import axios from 'axios';
import styled from 'styled-components'

const HeadStyle = styled.h1`
text-align: center;

`
const CharacterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App = () => {
  
  const [characters, setCharacters] = useState([
    {
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      name: "Abandango Cluster"
    }
  ])

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
    .then((info) => {
      console.log(info)
      setCharacters(info.data.results)
    })
    .catch((err) =>{
      console.log("there is an error", err)
    })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
     <div>
      < HeadStyle className="Header">Rick and Morty</ HeadStyle>
      
    <CharacterStyle className="App">
      {
        characters.map((character, index) => (
          <Character key= {`app-character-map-${index}`} character={character} />
        ))
        }

    </CharacterStyle>
    </div>
  );
}

export default App;
