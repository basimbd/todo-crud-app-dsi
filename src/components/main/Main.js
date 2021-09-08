import "./Main.css"

import {ACTIONS} from "../../contexts/TodoReducer";
import React from "react";

import TodoList from "../todoList/TodoList";
import TodoCreate from "../todoCreate/TodoCreate";

function Main(){
    return (
        <div className="main">
            <TodoList/>
            <TodoCreate {...{type: ACTIONS.CREATE_TODO}}/>
        </div>
    )
}

export default Main