import './index.css'

const TodoItem = props =>{
    const {Todo,deleteTodo} = props
    const {title,id} = Todo

    const onDeleteTodo = () => {
        deleteTodo(id)
    }
    return(
        <li className="todo-container">
            <p className="todo">{title}</p>
            <button type="button" className="del-button" onClick={onDeleteTodo}>Delete</button>
        </li>
    )
}
export default TodoItem