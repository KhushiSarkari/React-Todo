import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

class App extends Component {

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center grey-text">Todo's</h1>
        <Todos />
        <AddTodo />
      </div>
    );
  }

}

export default App;
