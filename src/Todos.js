import React from 'react';
const Todos = props =>{

    const todoList = props.todos.length ? (
        props.todos.map(todo =>{
            return (
                <div className="collection-item" key={todo.id}>

                <strong>{todo.id}.</strong> <span >{todo.content}</span><br/><button onClick={()=>props.deleteTodo(todo.id)}>  Delete</button>
                </div>
            )

        })
    ): (
        <p className="center"> You don't have any Todo list </p>
    )  
    console.log(todoList);
    return(
        <div className="todo collection">
           {todoList} 
        </div>
    )  
}

export default Todos
