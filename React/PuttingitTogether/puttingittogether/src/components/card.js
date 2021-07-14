import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    };
    addAge = () => { this.setState({ age: this.state.age + 1 }); }
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{firstName} , {lastName}</h1>
                <p><h3>Age : {this.state.age}</h3></p>
                <p><h4>Hair Color : {hairColor}</h4></p>
                <button onClick={this.addAge}>Click here!</button>
            </div>
        );
    }
}
export default Card;