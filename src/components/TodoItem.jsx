export default function TodoItem({task, onToggle, onDelete, onEdit}){
    return(
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
            <input 
                className="checkbox"
                type="checkbox" 
                checked = {task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <div className="actions">
                <button className="btn delete" onClick={() => onDelete(task.id)}>Delete</button>
                <button className="btn edit" onClick={() => onEdit(task.id)}>Edit</button>
            </div>
        </li>
    )
}