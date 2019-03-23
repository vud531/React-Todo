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
    let deadline, status;
    if (props.toDoProps.deadline) {
        console.log(props.toDoProps.deadline);
        deadline = new Date(props.toDoProps.deadline).toDateString();
        status = (new Date(props.toDoProps.deadline) >= new Date()) ? "pending" : "passed-due";
    } else {
        deadline=""
        status=""
    }
    return (
        <div className="todo-item">
            <p className={props.toDoProps.completed? "completed": "incompleted"}
                data-id={props.id}
                onClick={props.markCompleted}>
                {props.toDoProps.todo}
            </p>

            <p className={status}>
                {deadline}
            </p>
        </div>


    )
};




export default Todo;