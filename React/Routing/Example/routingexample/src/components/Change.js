import React from 'react'

const Change = (props) => {

    const {number, color, backgroundcolor} = props;
    const style = {
        color: color,
        backgroundColor: backgroundcolor
    }

    return (
        <div>
            {isNaN(number) ? <h2 style={style}>The Word is: {number}</h2>: <h2 style={style}>The Number is: {number}</h2>}
        </div>
    )
}

export default Change
