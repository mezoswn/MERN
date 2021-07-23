import React, {useState} from 'react';

const BoxForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addColor(input)
    setInput("")
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="moath">
        <label htmlFor="text" className="m">Color: </label>
          <input type="text" className="m" id="colFormm"  name="color" onChange= { handleChange } value={ input }/>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default BoxForm;