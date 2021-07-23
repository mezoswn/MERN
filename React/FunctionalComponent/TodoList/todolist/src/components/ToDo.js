import React from 'react';

const ToDo = (props) => {
    const {todo, index, checklist, setChecklist} = props;
    const deleteTodo = () => {
        setChecklist(() => {
            return checklist.filter(todo => checklist.indexOf(todo) !== index);
        });
    }

    const isComplete = e => {
        checklist[index].isDone = !checklist[index].isDone;
        setChecklist([...checklist]);         
        };

    return(
        <div className="container bg-success">
            <br/>
            <h4 style={{textDecoration: todo.isDone ? "line-through" : ""}}>{todo.taskName}</h4>            
            <div className='container w-50'>
                <label htmlFor="checkbox">Completed</label>
                <input onChange={isComplete} type='checkbox' checked={todo.isDone}/>
                <button className='btn btn-sm btn-danger btn-block' onClick={deleteTodo}>Delete</button> 
            </div>
        </div>
    );
}
export default ToDo;