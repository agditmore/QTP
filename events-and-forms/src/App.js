import React from 'react';
import EventsAndState from './Components/EventsAndState';
import Form from './Components/Form';
import TextArea from './Components/TextArea';
import Select from './Components/Select';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      name: '',
      people: [],
      food: '',
      poem: '',
      chocolate: ''
    };
  }
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    // this.setState({
    //   isToggleOn: !this.state.isToggleOn
    // })
  }
  handleChange = (event, stateKey) => {
    this.setState({
      [stateKey]: event.target.value
    });
 }
 handleEnterPress = (event) => {
  if (event.key === 'Enter') {
    this.setState({
      name: '',
      people: [
        ...this.state.people,
        event.target.value
      ]
    });
  }
}
handleSubmit = (event, stateKey, input) => {
  alert(`Submitted: ${input}`);
  this.setState({
    [stateKey]: ''
  });
  event.preventDefault();
}
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.handleClick}>
            Click me
          </button>
          <p> Current isToggleOn: {this.state.isToggleOn.toString()} </p>
        </div>
        <hr />
        <EventsAndState 
          name={this.state.name}
          onKeyDown={this.handleEnterPress}
          onChange={(event) => this.handleChange(event, 'name')}
          people={this.state.people}

        />
        <hr />
        <Form 
          onSubmit={(event) => this.handleSubmit(event, 'food', this.state.food)}
          food={this.state.food}
          onChange={(event) => this.handleChange(event, 'food')}
        />
        <hr />
        <TextArea
          onSubmit={(event) => this.handleSubmit(event, 'poem', this.state.poem)}
          poem={this.state.poem}
          onChange={(event) => this.handleChange(event, 'poem')}
        />
        <hr />
        <Select
          onSubmit={(event) => this.handleSubmit(event, 'chocolate', this.state.chocolate)}
          chocolate={this.state.chocolate}
          onChange={(event) => this.handleChange(event, 'chocolate')}
        />
      </div>
    );
  }
}

export default App;
