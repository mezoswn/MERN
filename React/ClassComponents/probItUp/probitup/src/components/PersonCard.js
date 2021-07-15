
import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
    const { firstName, lastName, age, hairColor } = this.props;
return (
    <div>
        <h1>{firstName} , {lastName}</h1>
        <p><h3>Age : {age} </h3></p>
        <p><h4>Hair Color : {hairColor}</h4></p>
    </div>);
    }
}
    
export default PersonCard;