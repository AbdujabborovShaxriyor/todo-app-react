import TodoItem from "./TodoItem"

export default function TodoList({tasks, onToggle, onDelete, onEdit}){
    return(
        <ul className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key = {task.id}
                    task = {task}
                    onToggle = {onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    )
}   
