import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';
import TodoCount from './components/TodoCount';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: "example todo",
          completed: false
        }, 
        {
          id: 2,
          name: "2nd example",
          completed: false
        }
      ],
      todoText: '',
      count: 0
    }
}

handleChange = (event) => {
  this.setState({
    todoText: event.target.value
  });
}

handleEnterPress = (event) => {
  console.log("here");
  if (event.key === 'Enter') {
    const newObject={
                      id: this.state.todos.length+1, 
                      name: event.target.value,
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

handleClick = (event, todoChanged) => {
  const newArray = this.state.todos.map((todoOld) => todoOld === todoChanged ? {
    id: todoOld.id,
    name: todoOld.name,
    completed: !todoOld.completed
  }: todoOld)
  this.setState({
    todos: newArray
  });
}

render(){
  return (
    <div>
      <TodoList 
        todos={this.state.todos}
        onClick={this.handleClick}
      />
      <InputTodo 
        onKeyDown={this.handleEnterPress}
        onChange={(event) => this.handleChange(event, 'todoText')}
        todoText={this.state.todoText}
        todos={this.state.todos}
      />
      <TodoCount 
        count={this.state.count}
        todos={this.state.todos}
      />
    </div>
  );
}
}


export default App;
