import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import TodoCount from './components/TodoCount';
import ShowOrHideButton from './components/ShowOrHideButton';

let StoredAllTodos = [];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: "Do laundry",
          completed: true
        }, 
        {
          id: 2,
          name: "Take out trash",
          completed: false
        },
        {
          id: 3,
          name: "Walk dog",
          completed: false
        }
      ],
      count: 0,
      show: true
    }
}

handleEnterPress = (event) => {
  if (event.key === 'Enter' && event.target.value.trim() !== "") {
    const newObject={
      id: this.state.todos.length+1, 
      name: event.target.value.trim(),
      completed: false
    }
    this.setState({
      todoText: '',
      todos: [
        ...this.state.todos,
        newObject
      ]
    });
  }
}

handleCheckboxClick = (event, todoChanged) => {
  const newArray = this.state.todos.map((todoOld) => todoOld.id === todoChanged.id ? {
    id: todoOld.id,
    name: todoOld.name,
    completed: !todoOld.completed
  }: todoOld)
  this.setState({
    todos: newArray
  });
}

handleButtonClick = (notCompletedTodos) => {
  if (this.state.show){
    StoredAllTodos = this.state.todos;
      this.setState({
        show: false,
        todos: notCompletedTodos 
      })
  }
  else {
    this.setState({
      show: true,
      todos: StoredAllTodos
    })
  }
}

render(){
  return (
    <div>
      <TodoList 
        todos={this.state.todos}
        onClick={this.handleCheckboxClick}
      />
      <InputTodo 
        onKeyDown={this.handleEnterPress}
        todoText={this.state.todoText}
        todos={this.state.todos}
      />
      <TodoCount 
        count={this.state.count}
        todos={this.state.todos}
      />
      <ShowOrHideButton 
        onClick={this.handleButtonClick}
        show={this.state.show}
        todos={this.state.todos}
      />
    </div>
  );
}
}


export default App;
