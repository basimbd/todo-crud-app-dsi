export const ACTIONS = {
    CREATE_TODO: "create-todo",
    UPDATE_TODO: "update-todo",
    DELETE_TODO: "delete-todo",
}

function TodoReducer(state, action) {
    switch (action.type) {
        case ACTIONS.CREATE_TODO:
            return state.concat(action.todo)

        case ACTIONS.UPDATE_TODO: {
            const newTodos = [...state]
            newTodos[(action.todo.id - 1)] = action.todo
            return newTodos
        }

        case ACTIONS.DELETE_TODO: {
            const newTodos = [];
            let j = 0;
            for (let currentTodo of state) {
                if (currentTodo.id !== action.todo.id) {
                    newTodos.push({...currentTodo, id: ++j})
                }
            }
            return newTodos
        }

        default:
            return state
    }
}

export default TodoReducer