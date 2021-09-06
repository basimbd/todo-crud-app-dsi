import '../App.css';
import { useState } from "react";
import TodoUpdate from "./TodoUpdate";

function TodoCard({ index, todo, todoUpdater, todoDeleter }){
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    const handleDelete = () => {
        if(window.confirm("Are you sure you want to delete this todo?")) {
            todoDeleter(index);
        }
    }

    return(
        <div className={"card gray-shadow-md"}>
            <div>
                <h1>Name: {todo.name}</h1>
                <h4>Email: {todo.email}</h4>
                <p><b>Description:</b> {todo.desc}</p>
            </div>
            <div className={"flex flex-row"}>
                <button className={{backgroundImage: `url("icons/edit-solid.svg")`}} onClick={openModal}>U</button>
                {
                    showModal && <TodoUpdate {...{index, todo, todoUpdater, closeModal}}/>
                }
                <button className={{backgroundImage: `url("icons/trash-alt-solid.svg")`}} onClick={handleDelete}>D</button>
            </div>
        </div>
    )
}

export default TodoCard