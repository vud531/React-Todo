import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

let todos =
  [
    {todo: "create a todo app", completed: false, key:1},
    {todo: "learn react class component", completed: false, key:2},
    {todo: "read articles on react", completed: false, key:3},
  ];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
      newTodo: {
        todo: "",
        completed: false,
        key: Date.now()
      }
    }
  }

  handleChanges = event => {
    console.log('event: ', event.target.value);
    const input = event.target.value;
    // update the name property on state
    this.setState((state,prop) => {
      console.log(state.newTodo);
      state.newTodo.todo += input;
      // console.log(prop);
    });

    // console.log(this)
  };

  updateList = event => {
    event.preventDefault();
    const newTodo = this.newTodo;
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm 
        formProps={this.state.newTodo}
        handleChanges={this.handleChanges}
        updateList={this.updateList}
        />
      </div>
    );
  }
}

export default App;
