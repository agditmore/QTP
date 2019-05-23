import React from 'react';
import './App.css';
import FavMusic from './Components/FavMusic';

const music = [
  {id: '1',
  style: 'rock'}, 
  {id: '2',
  style: 'house'}, 
  {id: '3',
  style: 'country'
  }, 
  {id: '4',
  style: 'anything'}];

const isBusy = true;

const luckyNumbers = [15, 32, 3, 54, 25];

const showMyLuckyNumbers = () => {
  return luckyNumbers.toString();
}

function App() {
  return (
    <div className="App">
      <h1 className="myH1">I'm an orange header</h1>
      <p id="p1">Hello, I'm blue</p>
      <p id="p2">Hi... I'm red</p>
      <FavMusic music={music} />
      {music.length > 4 && <p>I love more than 3 music styles</p>}
      {isBusy ? <p>I'm busy</p> : <p>I'm free</p>}
      <p>My lucky numbers are... </p>
      {showMyLuckyNumbers()}
    </div>
  );
}

export default App;
