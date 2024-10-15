'use client'; // Dev - Pasindu M

import React, { useState } from 'react';
import styles from './test.module.css';

export default function Test(): JSX.Element {
    
    const [inputValue, setInputValue] = useState<string>(''); // For input field value
    const [todos, setTodos] = useState<{ id: number; text: string; isEditing: boolean }[]>([]);
    const [error, setError] = useState<string | null>(null); // For error handling


    // function for Add new item
    const addTodo = () => {
        if (inputValue.trim() === '') {
            setError('Please enter a valid to-do item.'); // If text field is empty error
            return;
        }

        const newTodo = { id: Date.now(), text: inputValue.trim(), isEditing: false };
        setTodos([...todos, newTodo]);
        setInputValue('');
    };



    // function for enable editing
    const editTodo = (id: number) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: true } : todo)));
    };

    // function for save the edited item
    const saveTodo = (id: number, newText: string) => {
        if (newText.trim() === '') {
            setError('To-do text cannot be empty.');
            return;
        }

        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, text: newText.trim(), isEditing: false } : todo
            )
        );
        setError(null); 
    };



    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setError(null); 
    };

  

    // function for delete a specific item
    const deleteTodo = (id: number) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

   

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>To-Do List</h1>

            <div className={styles.inputArea}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter new to-do item"
                    className={styles.input}
                />
                <button onClick={addTodo} className={styles.addButton}>
                    Add
                </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>
                        {todo.isEditing ? (
                            <>
                                <input
                                    type="text"
                                    defaultValue={todo.text}
                                    onBlur={(e) => saveTodo(todo.id, e.target.value)}
                                    className={styles.editInput}
                                    autoFocus
                                />
                            </>
                        ) : (
                            <>
                                <span className={styles.todoText}>{todo.text}</span>
                                <button onClick={() => editTodo(todo.id)} className={styles.editButton}>
                                    Edit
                                </button>
                                <button onClick={() => deleteTodo(todo.id)} className={styles.deleteButton}>
                                    Delete
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
