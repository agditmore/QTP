import React from 'react';

const TodoList = (props) => {
    return (
        <div className="app">
            <h1>Things to do</h1>
            <div id="main-todo-list" className="todo-list">
                <div className="todo">
                    {props.todos.map((todo) => {
                        return (
                            <div className="todo-container" key={todo.id}>
                                <input type="checkbox" className="todo-checkbox"onClick={(event) => props.onClick(event,todo)} />
                                <span>{todo.name}</span>
                            </div>
                        )
                    }
                    )
                    }

                </div>
            </div>
        </div>);
};

export default TodoList;