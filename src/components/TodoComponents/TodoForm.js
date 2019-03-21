import React from 'react';


const TodoForm = props => {
    // console.log(props)
    return (
        <form>
            <label>To Do:</label>
            <input
                type="text"
                value={props.formProps.todo}
                name="todo"
                placeholder="To Do"
                onChange={props.handleChanges} // onChange takes in a function definition -- when the user types, React calls the function, and passes in the event -> props.updateName(event)
            />
            <button onClick={props.updateList}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;