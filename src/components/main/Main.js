import "./Main.css"

import React from "react";

import TodoList from "../todoList/TodoList";
import TodoCreate from "../todoCreate/TodoCreate";

function Main(){
    return (
        <div className="main">
            <TodoList/>
            <TodoCreate {...{type: "create"}}/>
        </div>
    )
}

export default Main