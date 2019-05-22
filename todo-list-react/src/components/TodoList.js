import React from 'react';

const TodoList = (props) => {
    return (
        <div className="app">
            <h1>Things to do</h1>
            <div id="main-todo-list" className="todo-list">
                <div className="todo" id="todo-item-box">
                    {props.todos.map((todo) => {
                            return (
                                <div className="todo-container" 
                                    key={todo.id} 
                                    onClick={(event) => props.onClick(event,todo)}>
                                    <input className="todo-checkbox"
                                        type="checkbox" 
                                        checked={todo.completed} 
                                        onChange={()=>null} 
                                        onClick={(event) => props.onClick(event,todo)} 
                                    />
                                    <span id="todo-item-box">{todo.name}</span>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>);
};

export default TodoList;