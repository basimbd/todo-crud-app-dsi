import React, {useState} from "react";
import useClickedOutside from "../hooks/useClickedOutside";

function TodoUpdate({ index, todo, todoUpdater, closeModal }){
    const [nameField, setNameField] = useState(todo.name);
    const [emailField, setEmailField] = useState(todo.email);
    const [descField, setDescField] = useState(todo.desc);

    const updateModal = useClickedOutside(closeModal)

    function handleFormSubmit(e){
        e.preventDefault();
        if(nameField === ""){
            alert("Name cannot be empty.");
            return false;
        }
        if(emailField === ""){
            alert("Email cannot be empty.");
            return false;
        }
        if(descField === ""){
            alert("Description cannot be empty.");
            return false;
        }
        if(!emailField.includes("@")){
            alert("The email is not valid.");
            return false;
        }
        todoUpdater(
            index,
            {
                name:nameField,
                email:emailField,
                desc:descField,
            }
        );

        setNameField("");
        setEmailField("");
        setDescField("");
        closeModal();
    }

    const changeName = (e) => setNameField(e.target.value);
    const changeEmail = (e) => setEmailField(e.target.value);
    const changeDesc = (e) => setDescField(e.target.value)

    return (
        <div className={"modal-container"}>
            <div ref={updateModal} className={"modal-content blue-shadow-lg"}>
                <span className={"cross"} onClick={closeModal}>+</span>
                <h1>Update Your Todo</h1>
                <form className={"form-container"} onSubmit={handleFormSubmit}>
                    <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={nameField} onChange={changeName} placeholder={"Name"}/>
                    <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={emailField} onChange={changeEmail} placeholder={"Email"}/>
                    <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={descField} onChange={changeDesc} placeholder={"Todo Description"}/>
                    <div className={"flex flex-row flex-wrap"}>
                        <button className={"btn btn-blue"} type={"submit"}>Update The Todo</button>
                        <button className={"btn btn-gray"} onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TodoUpdate