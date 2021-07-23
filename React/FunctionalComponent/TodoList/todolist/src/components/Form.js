import React from 'react';

const Form = (props) => {
    const {checklist, setChecklist} = props;
    let todo = {
        taskName: "",
        isDone: false
    };
    
    const onChangeList = (e) => {
        todo.taskName = e.target.value;
        
    }

    const onClick = (e) => {
        setChecklist([...checklist, todo]);
        e.target.value = "";
        
    }

    return(
        <div className="container w-50 mt-3">
            <h4>Add a task below</h4>
            <br/>
            <input onChange={onChangeList} type="text" name='task' className='form-control'/>
            <button className="btn btn-primary btn-block" onClick={onClick}>Add Task</button>
        </div>
    )
}
export default Form;