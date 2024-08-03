import React,{useState} from 'react'

// Functional component for adding a new to-do item
export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()  // Prevent default form submission behavior
        addTodo(value)  // Call the addTodo function with the new task
        setValue("")  // Reset the input field
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input' 
                value={value} 
                placeholder='What is the task today?' 
                onChange={(e) => setValue(e.target.value)}  // Update state with input value
            />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}
