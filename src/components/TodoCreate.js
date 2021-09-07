import '../App.css';

import React, { useState } from "react";

function TodoCreate({ todoCreator }) {
    const [nameField, setNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [descField, setDescField] = useState("");

    function handleFormSubmit(e){
        e.preventDefault();
        //console.log(e);
        // console.log(`Name: ${e.target.name.value}`)
        // console.log(`Email: ${e.target.email.value}`)
        // console.log(`Desc: ${e.target.description.value}`)
        if(nameField === ""){
            alert("Name cannot be empty.");
            return false
        }
        if(emailField === ""){
            alert("Email cannot be empty.");
            return false
        }
        if(descField === ""){
            alert("Description cannot be empty.");
            return false
        }
        if(!emailField.includes("@")){
            alert("The email is not valid.")
            return false
        }
        todoCreator(
            {
                name:nameField,
                email:emailField,
                desc:descField,
            }
        )

        setNameField("")
        setEmailField("")
        setDescField("")
    }

    const changeName = (e) => setNameField(e.target.value);
    const changeEmail = (e) => setEmailField(e.target.value);
    const changeDesc = (e) => setDescField(e.target.value)

    return (
        <div className={"container blue-shadow-lg"}>
            <h1 className={"title"}>Create Your Todos List</h1>
            <form className={"form-container"} onSubmit={handleFormSubmit}>
                {/*<label/>*/}
                <input name={"name"} className={"input-field gray-shadow-md"} type={"text"} value={nameField} onChange={changeName} placeholder={"Name"}/>
                <input name={"email"} className={"input-field gray-shadow-md"} type={"email"} value={emailField} onChange={changeEmail} placeholder={"Email"}/>
                <textarea name={"desc"} className={"input-field gray-shadow-md height-150"} value={descField} onChange={changeDesc} placeholder={"Todo Description"}/>
                <button className={"btn btn-blue"} type={"submit"}>Create a Todo</button>
            </form>
        </div>
    );
}

export default TodoCreate;