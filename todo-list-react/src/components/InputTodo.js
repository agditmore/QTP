import React from 'react';

const InputTodo = (props) => {
    return (
        <div className="input-box-container">
        <input 
        id="input-box"
        type="text"
        value={props.todoText}
        onKeyDown={props.onKeyDown}
        placeholder="Enter new todo here" 
        onChange={()=>null}/>
        </div>
    );
};

export default InputTodo;