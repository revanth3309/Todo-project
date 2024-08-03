import React,{useState} from 'react'

// Functional component for editing a to-do item
export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)  // Initialize state with the task to be edited

    const handleSubmit = e => {
        e.preventDefault()  // Prevent default form submission behavior
        editTodo(value, task.id)  // Call the editTodo function with the updated task and task id
        setValue("")  // Reset the input field
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input' 
                value={value} 
                placeholder='Update Task' 
                onChange={(e) => setValue(e.target.value)}  // Update state with input value
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
