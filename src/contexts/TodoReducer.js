import {ACTIONS} from "../data/actions";

function TodoReducer(state, {type, todo}) {
    console.log("Type: ", type);
    console.log("TODO: ", todo);
    switch (type) {
        case ACTIONS.CREATE_TODO:
            return [...state, todo]

        case ACTIONS.UPDATE_TODO: {
            state[(todo.id - 1)] = todo
            console.log(state);
            return state
        }

        case ACTIONS.DELETE_TODO: {
            const newTodos = [];
            let j = 0;
            for (let currentTodo of state) {
                if (currentTodo.id !== todo.id) {
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