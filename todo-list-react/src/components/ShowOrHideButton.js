import React from 'react';

const ShowOrHideButton = (props) => {
    const notCompletedTodos = props.todos.filter((todo) => todo.completed===false)
    return (
        <div className="input-box-container">
            <button onClick={() => props.onClick(notCompletedTodos)}>
                {props.show ? "Hide Completed Todos":"Show Completed Todos"}
            </button>
        </div>
    )
}

export default ShowOrHideButton;