import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      complete: false,
      todoItems: ["example todo", "2nd example"],
      todoText: '',
    }

  
}
render(){
  return (
    <div>
      <TodoList 
        todoItems={this.state.todoItems}
      />
      <InputTodo 
      />
      {/* add in remaining count here */}
    </div>
  );
}
}


export default App;
