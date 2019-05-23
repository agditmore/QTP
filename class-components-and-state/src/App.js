import React from 'react';
import './App.css';
import SuperPeople from './Components/SuperPeople';

const superPeople = [
  {
    name: 'Thanos',
    power: 'the Snap',
    id: 1
  }, 
  {
    name: 'Iron Man',
    power: 'Intelligence x 3000',
    id: 2
  }, 
  {
    name: 'Dr. Strange',
    power: 'the Time Stone',
    id: '3'
  }];

const restaurants = ['58 hundred', 'Chavas', 'Tei Too'];

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      randomPerson: 'Miles',
      randomRestaurant: 'home'
    };
  }

  handleClick = () => {
    const randomPerson = superPeople[Math.floor(Math.random() * superPeople.length)].name;
    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    this.setState({
      randomPerson,
      randomRestaurant
    })
  }

  render() {return (
    <SuperPeople 
      superPeople={superPeople}
      restaurants={restaurants}
      onClick={this.handleClick}
      randomPerson={this.state.randomPerson}
      randomRestaurant={this.state.randomRestaurant}/>
  );}
}

export default App;
