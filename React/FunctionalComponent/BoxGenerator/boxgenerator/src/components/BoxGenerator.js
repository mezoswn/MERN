import React, {useState} from 'react';

const BoxGenerator = props => {
 
  const {color} = props;

  return (<div className="box" style={{backgroundColor: color, display: "inline-block", width: 200, height: 200, marginRight: 10}}></div>)

};

export default BoxGenerator;