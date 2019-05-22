import React from 'react';

const TodoCount = (props) => {
    const counter = props.todos.filter((todo) => todo.completed===false)
    return (
    <div className="input-box-container">
        <p id="remaining-count">{counter.length} items remaining</p>
    </div>
    )
}

export default TodoCount;