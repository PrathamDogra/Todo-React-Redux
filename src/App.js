import React, { Component } from 'react';
import Todos from "./Todos"

class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[
        {id:1, content:"Code"},
        {id:2, content:"Read a book"},
      ]

    }

   }
  deleteTodo =(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    });
    this.setState({
      todos:todos,
    })
    
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>

      </div>
    );
  }
}

export default App;