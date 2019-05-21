import React from 'react';

const InputTodo = (props) => {
    return (
        <div>
        <input
        type="text"
        value={props.todoText}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        placeholder="Enter new todo here" />
        <p> Current Array: {props.todos.map((todo, index) => {
            if(index !== (props.todos.length - 1)) {
                return `${todo.name},`;
            } else {
                return todo.name;
            }
        })}</p>
        </div>
    );
};

export default InputTodo;