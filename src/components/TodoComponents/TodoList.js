// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
const TodoList = props => {
    console.log(props.todos);
    return (
        <ul className="todos">
            {props.todos.map((todo, index) => (<li className="todo"><Todo key={index} status={todo.completed} description={todo.todo} /></li>))}
        </ul>
    );
}


export default TodoList;