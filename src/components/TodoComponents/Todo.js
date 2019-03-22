import React from 'react';
import "./Todo.css";
// const getInput = (e) => {
//     e.target.classList.toggle('completed');
//     e.target.classList.toggle('incompleted');
//     e.target.setAttribute('style', 'text-decoration: underline; text-decoration-line: line-through;');
//     // e.target.classList.delete('completed');
//     console.log(e.target.classList)
// }
const Todo = props => {
    // console.log(props);
    const deadline = new Date(props.toDoProps.deadline);
    const status = (deadline >= new Date()) ? "pending" : "passed-due";
    return (
        <div className="todo-item">
            <p className={props.toDoProps.completed? "completed": "incompleted"}
                data-id={props.id}
                onClick={props.markCompleted}>
                {props.toDoProps.todo}
            </p>

            <p className={status}>
                {new Date(deadline).toDateString()}
            </p>
        </div>


    )
};




export default Todo;