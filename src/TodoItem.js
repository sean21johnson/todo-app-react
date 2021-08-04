import React from 'react';

function TodoItem({ todo, onLeftClick, onRightClick }) {

    return (


        <li onClick={() => onLeftClick(todo)} onContextMenu={() => onRightClick(todo)}>
           <p className={`todoText ${todo.completed ? "completed" : ""}`}>{todo.text}</p> 
        </li>
    )
}

export default TodoItem;