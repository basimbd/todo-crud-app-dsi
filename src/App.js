import './App.css';

import React, { useState } from "react";

import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([])

    const createTodos = (todo) => setTodos(todos.concat(todo))
    const deleteTodos = (index) => {
        setTodos(todos.filter((element, idx) => idx !== index))
    }
    const updateTodos = (index, newTodo) => {
        const newTodos = [...todos]
        newTodos[index] = newTodo
        setTodos(newTodos)
    }

    return (
        <div className="flex flex-row flex-wrap">
            <TodoCreate todoCreator={createTodos}/>
            <TodoList {...{todos, todoUpdater: updateTodos, todoDeleter:deleteTodos}}/>
        </div>
    );
}

export default App;
