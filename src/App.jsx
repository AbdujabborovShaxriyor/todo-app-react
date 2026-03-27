import { useState } from "react"
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


export default function App(){

  const [tasks, setTasks] = useState([])

  function addTask(text){

    const taskObject = {
      id: Date.now(),
      text: text,
      completed: false
    }

    setTasks(prevTasks => [...prevTasks,taskObject])
    
  }

  function toggleTask(id){
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id===id ? {...task, completed: !task.completed} : task
      )
    )
  }

  function deleteTask(id){
    setTasks(prevTasks => 
      prevTasks.filter(task => task.id!==id)
    )
  }

  function editTask(id){
    const newText = window.prompt("Enter the task: ")
    setTasks(prevTasks=>
      prevTasks.map(task => 
        task.id===id ? {...task, text: newText} : task
      )
    )
  }

  return(
    <div className="app">
      <Header/>
      <TodoForm onAdd = {addTask}/>
      <TodoList
        tasks = {tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  )
}