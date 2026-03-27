export default function TodoForm({onAdd}){

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const newTask = formData.get("task")

        if(newTask.trim()==="") return 

        onAdd(newTask)
        event.target.reset()
    }

    return(
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input" type="text" name='task' placeholder='Enter a task ...'/>
                <button className='add-btn' type='submit'>Add task</button>
            </form>
        </main>
    )
}