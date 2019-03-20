import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let todos =
  [
    {todo: "create a todo app", completed: false},
    {todo: "learn react class component", completed: false},
    {todo: "read articles on react", completed: false},
  ];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
