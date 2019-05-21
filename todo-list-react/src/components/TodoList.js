import React from 'react';

const TodoList = (props) => {
    return (
    <div className="app">
      <h1>Things to do</h1>
      <div id="main-todo-list" className="todo-list">
        <div className="todo">
         {props.todoItems.map((todoItem, index) => {
             return (
                <div className="todo-container">
                <input type="checkbox" class="todo-checkbox" />
                {todoItem}
                </div>
             )
         }
            )}
          
        </div>
      </div>
    </div>);
};

export default TodoList;