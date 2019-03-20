import React from 'react';

const Todo = props => {
    return (
        <p className={props.status? "completed": "incompleted"}
        onClick={console.log("hi")} >
        {props.description}
        </p>
    )
};




export default Todo;