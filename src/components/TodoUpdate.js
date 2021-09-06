import React, {useState} from "react";

function TodoUpdate({ index, todo, todoUpdater, closeModal }){
    const [nameField, setNameField] = useState(todo.name);
    const [emailField, setEmailField] = useState(todo.email);
    const [descField, setDescField] = useState(todo.desc);

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
        <div className={"modal blue-shadow-lg"}>
            <span className={"cross"} onClick={closeModal}>+</span>
            <h1>Update Your Todo</h1>
            <form className={"form-container"} onSubmit={handleFormSubmit}>
                <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={nameField} onChange={changeName} placeholder={"Name"}/>
                <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={emailField} onChange={changeEmail} placeholder={"Email"}/>
                <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={descField} onChange={changeDesc} placeholder={"Todo Description"}/>
                <button className={"btn btn-blue"} type={"submit"}>Update The Todo</button>
                <button className={"btn btn-gray"} onClick={closeModal}>Cancel</button>
            </form>
        </div>
    );
}

export default TodoUpdate