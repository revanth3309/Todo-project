import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();  // Generate unique IDs for tasks

// Functional component that manages the to-do list
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");  // State for search query

    // Function to add a new to-do
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);  // Log current state (for debugging)
    };

    // Function to toggle the completion status of a to-do
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    // Function to delete a to-do
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Function to toggle the editing status of a to-do
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    // Function to edit the task of a to-do
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    };

    // Filter todos based on search query
    const filteredTodos = todos.filter(todo => 
        todo.task.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='TodoWrapper'>
            <h1>Get Things Done!!!</h1>
            <input 
                type="text" 
                placeholder="Search tasks" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  // Update search query state
                className="search-input"
            />
            <TodoForm addTodo={addTodo} />
            {filteredTodos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm 
                        editTodo={editTask} 
                        task={todo} 
                    />
                ) : (
                    <Todo 
                        task={todo} 
                        key={index}
                        toggleComplete={toggleComplete} 
                        deleteTodo={deleteTodo} 
                        editTodo={editTodo} 
                    />
                )
            ))}
        </div>
    );
};
