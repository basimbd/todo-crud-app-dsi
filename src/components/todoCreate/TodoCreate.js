import "./TodoCreate.css"

import React, {useContext, useEffect, useState} from "react";
import {TodoContext} from "../../contexts/TodoContextProvider";
import useClickedOutside from "../../hooks/useClickedOutside";

function TodoCreate({ type, passedTodo, closeModal }){
    const updateModal = useClickedOutside(closeModal)

    const [todos, setTodos] = useContext(TodoContext);
    const [todo, setTodo] = useState({
        //id: null,
        name: "",
        email: "",
        desc: "",
    });

    useEffect(() => {
        if(passedTodo && !todo.id){
            //console.log("Setting todo_ with the passedTodo")
            setTodo({
                id: passedTodo.id,                  // Reassigning todos values
                name: passedTodo.name,              // if it is an update operation
                email: passedTodo.email,
                desc: passedTodo.desc,
            })
        }
    }, [passedTodo, todo.id])

    const changeField = e => {
        setTodo({...todo,[e.target.name]:e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!passedTodo && !todo.id && type === "create"){
            setTodos([...todos, {...todo, id:(todos.length+1) }])
            setTodo({
                //id: null,
                name: "",
                email: "",
                desc: "",
            })
        } else if(type === "update"){
            //console.log("Entered Update")
            const newTodos = [...todos]
            newTodos[(todo.id-1)] = todo
            setTodos(newTodos)
            closeModal();
        }
    }

    //console.log("Rendering TodoCreate...");
    if (type === "create"){
        return (
            <div className={"container blue-shadow-lg"}>
                <h1 className={"title"}>Create Your Todos List</h1>
                <form className={"form-container"} onSubmit={handleFormSubmit}>
                    <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={todo.name} onChange={changeField} placeholder={"Name"}/>
                    <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={todo.email} onChange={changeField} placeholder={"Email"}/>
                    <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={todo.desc} onChange={changeField} placeholder={"Todo Description"}/>
                    <button className={"btn btn-blue"} type={"submit"}>Create a Todo</button>
                </form>
            </div>
        )
    } else if(type === "update"){
        return (
            <div className={"modal-container"}>
                <div ref={updateModal} className={"modal-content blue-shadow-lg"}>
                    <div className={"height-50"}><span className={"cross"} onClick={closeModal}>+</span></div>
                    <h1>Update Your Todo</h1>
                    <form className={"form-container"} onSubmit={handleFormSubmit}>
                        <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={todo.name} onChange={changeField} placeholder={"Name"}/>
                        <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={todo.email} onChange={changeField} placeholder={"Email"}/>
                        <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={todo.desc} onChange={changeField} placeholder={"Todo Description"}/>
                        <div className={"flex flex-row flex-wrap"}>
                            <button className={"btn btn-blue"} type={"submit"}>Update The Todo</button>
                            <button className={"btn btn-gray"} onClick={closeModal}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    return (
        <React.Fragment></React.Fragment>
    )
}

export default TodoCreate