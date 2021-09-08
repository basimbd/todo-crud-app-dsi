import '../App.css';
import { useState } from "react";
import TodoUpdate from "./TodoUpdate";
import { ReactComponent as EditIcon } from "../icons/edit-solid.svg";
import { ReactComponent as DeleteIcon } from "../icons/trash-alt-solid.svg";

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
            <div className={"todo-info"}>
                <h1>Name: {todo.name}</h1>
                <h4 className={"overflow-break-word"}>Email: {todo.email}</h4>
                <p><b>Description:</b> {todo.desc}</p>
            </div>
            <div className={"edit-delete"}>
                <button className={"icon"} onClick={openModal}><EditIcon/></button>
                {
                    showModal && <TodoUpdate {...{index, todo, todoUpdater, closeModal}}/>
                }
                <button className={"icon"} onClick={handleDelete}><DeleteIcon/></button>
            </div>
        </div>
    )
}

export default TodoCard