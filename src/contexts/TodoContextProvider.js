import React, {useState} from "react";

export const TodoContext = React.createContext()

function TodoContextProvider({ children }){
    const [todos, setTodos] = useState([])

    return (
        <TodoContext.Provider value={[todos, setTodos]}>{children}</TodoContext.Provider>
    )
}

export default TodoContextProvider