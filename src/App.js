import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./App.css";

let todos =
  [
    {todo: "create a todo app", deadline: "3/10/2019",completed: false, key:1},
    {todo: "learn react class component", deadline: "4/10/2019", completed: false, key:2},
    {todo: "read articles on react", deadline: "5/10/2019", completed: false, key:3},
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
        // deadline: new Date(),
        key: null
      }
    }
  }

  handleChanges = event => {
    console.log('event: ', event.target.value);
    // const input = event.target.value;
    // update the name property on state
    const newTodo = this.state.newTodo;
    newTodo[event.target.name] = event.target.value;
    this.setState({ newTodo: newTodo });
  };

  updateList = event => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
    console.log(newTodo)
    if (newTodo.todo === ""){
      alert("Please enter a valid task");
      return;
    }

    newTodo.key = Date.now();
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodo: {
        todo: "",
        completed: false,
        key: null
      }
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    console.log(this.state.todos);
    this.setState({
      todos:this.state.todos.filter(todo => !todo.completed)
    })
  }

  markCompleted = event => {

    const index = event.target.dataset.id;
    const newTodos = [...this.state.todos]
    newTodos[index].completed = !newTodos[index].completed
    // console.log(index); 
    this.setState({
      todos: newTodos
    });

    console.log(this.state.todos);
  } 

  
  render() {
    return (
      <div className="app">
        <TodoForm 
        formProps={this.state.newTodo}
        handleChanges={this.handleChanges}
        updateList={this.updateList}
        clearCompleted={this.clearCompleted}
        />

        <TodoList 
        todos={this.state.todos}
        markCompleted={this.markCompleted} 
        />
      </div>
    );
  }
}

export default App;
