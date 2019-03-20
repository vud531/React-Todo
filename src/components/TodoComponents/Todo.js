import React from 'react';

const Todo = props => {
    return (
        <p className={props.status? "completed": "incompleted"}>{props.description}</p>
    )
};

export default Todo;