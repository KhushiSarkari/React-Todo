import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Learn React" },
      { id: 2, content: "Rewatch- The Force Awakens" }
    ]
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    const [lastItem] = this.state.todos.slice(-1);
    todo.id = lastItem ? lastItem.id + 1 : 1;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center grey-text">Todo's</h1>
        <Todos />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }

}

export default App;
