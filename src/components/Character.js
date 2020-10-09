// Write your Character component here
import React from "react";
import styled from 'styled-components'

const StatusStyle= styled.div`
background-color: grey;
border: solid black;
border-radius: 15px;
padding:.5rem;
color: red;
font-size:1.5rem;
font-weight: bold;
&:hover {
    color:purple;
    transform: scale(1.5);
     transition: all .5s ease-in-out;

}
transition: all .5s ease-in-out;

`


const Character = (props) => {
    console.log(props)

    return(
        <div>
            <img src={props.character.image} alt={props.character.name} />
            <StatusStyle> Species: {props.character.species}... Status:{props.character.status} 
            </StatusStyle>
            </div>
    )

}
export default Character;