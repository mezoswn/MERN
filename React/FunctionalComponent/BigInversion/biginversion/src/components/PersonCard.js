import React, {useState} from 'react'

export const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.firstName} , {props.lastName}</h1>
            <p><h3>Age : {props.age} </h3></p>
            <p><h4>Hair Color : {props.hairColor}</h4></p>
        </div>
    )
}
    
export default PersonCard;