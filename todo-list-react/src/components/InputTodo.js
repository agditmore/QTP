import React from 'react';

const InputTodo = (props) => {
    return (
        <div className="input-box-container">
        <input 
        id="input-box"
        type="text"
        value={props.todoText}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        placeholder="Enter new todo here" />
        </div>
    );
};

export default InputTodo;