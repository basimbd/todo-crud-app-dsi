import '../App.css';
import React from "react";
import TodoCard from "./TodoCard";

function TodoList({ todos, todoUpdater, todoDeleter }){
    //console.log(todos)
    if(todos.length !== 0){
        return (
            <div className={"container blue-shadow-lg"}>
                <h1 className={"title"}>Todos</h1>
                <ul>
                    {
                        todos.map((todo,index)=><li key={todo.name+todo.email+index}>
                            <TodoCard {...{index, todo, todoUpdater, todoDeleter}}/>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
    return (
        <React.Fragment></React.Fragment>
    )
}

export default TodoList