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
        key: null
      }
    }
  }

  handleChanges = event => {
    console.log('event: ', event.target.value);
    // const input = event.target.value;
    // update the name property on state
    this.setState({ newTodo: {
      [event.target.name]:event.target.value,
      key:Date.now() }
    });
  };

  updateList = event => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
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
    this.setState({
      todos:todos.filter(todo => !todo.completed)
    })
  }

  markCompleted = event => {
    // console.log(event.target);
    event.target.classList.toggle('completed');
    event.target.classList.toggle('incompleted');
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
      <div>
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
