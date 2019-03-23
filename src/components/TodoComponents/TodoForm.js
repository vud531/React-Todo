import React from 'react';
import "./TodoForm.css";

const TodoForm = props => {
    // console.log(props)
    return (
        <form className="todo-form">
            <div className="form-group">
                <label>To Do</label>
                <textarea
                id="to-do"
                type="text"
                value={props.formProps.todo}
                name="todo"
                placeholder="Enter a Task"
                onChange={props.handleChanges} // onChange takes in a function definition -- when the user types, React calls the function, and passes in the event -> props.updateName(event)
                ></textarea>
            </div>

            <div className="form-group">
                <label>Deadline</label>
                <input
                id="deadline" 
                type="date" 
                name="deadline"
                onChange={props.handleChanges}  
                />
            </div>

            <div className="button-group">

                <button id="add" onClick={props.updateList}>Add New</button>
                <button id="remove" onClick={props.clearCompleted}>Remove Completed</button>
       
            </div>
        </form>
    );
}

export default TodoForm;