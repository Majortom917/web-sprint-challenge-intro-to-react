// Write your Character component here
import React from "react";
import axios from "axios";


const Character = (props) => {
    console.log(props)

    return(
        <div>
            <img src={props.character.image} alt={props.character.name} /></div>
    )

}
export default Character;