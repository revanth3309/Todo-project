import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// Functional component for displaying a single to-do item
export const Todo = ({task, toggleComplete, editTodo, deleteTodo}) => {
    return (
        <div className='Todo'>
            <p 
                onClick={() => toggleComplete(task.id)} 
                className={`${task.completed ? 'completed' : ""}`}  // Toggle completion status on click
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon 
                    icon={faPenToSquare} 
                    onClick={() => editTodo(task.id)}  // Trigger edit mode on click
                    className="icon"
                />
                <FontAwesomeIcon 
                    icon={faTrash} 
                    onClick={() => deleteTodo(task.id)}  // Delete task on click
                    className="icon"
                />
            </div>
        </div>
    )
}
