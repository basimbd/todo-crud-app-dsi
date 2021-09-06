import '../App.css';
import TodoCard from "./TodoCard";

function TodoList({ todos, todoUpdater, todoDeleter }){
    return (
        <div className={"container"}>
            <ul>
                {
                    todos.map((todo,index)=><li key={todo.name+todo.email+index}>
                        <TodoCard {...{index, todo, todoUpdater, todoDeleter}}/>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default TodoList