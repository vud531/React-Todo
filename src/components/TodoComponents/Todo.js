import React from 'react';
const getInput = (e) => {
    e.target.classList.toggle('completed');
    e.target.classList.toggle('incompleted');
    e.target.setAttribute('style', 'text-decoration: underline; text-decoration-line: line-through;');
    // e.target.classList.delete('completed');
    console.log(e.target.classList)
}
const Todo = props => {
    // console.log(props);
    return (
        <p className={props.toDoProps.completed? "completed": "incompleted"}
        onClick={(e) => getInput(e)} >
        {props.toDoProps.todo}
        </p>
    )
};




export default Todo;