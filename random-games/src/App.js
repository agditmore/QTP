import React from 'react';
import HeadsOrTails from './Components/HeadsOrTails';
import RockPaperScissors from './Components/RockPaperScissors';
import './App.css';

const HT = ['heads', 'tails'];
const RPS = ['rock', 'paper', 'scissors'];
let hasClickedHT = false;
let hasClickedRPS = false;
let RPSchoice = '';
let randomRPS = '';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      resultHT: 'win',
      resultRPS: 'win'
    };
  };

  handleClick = (choice, gameType) => {
    if (gameType === "HT") {
      const randomHT = HT[Math.floor(Math.random() * HT.length)];
      hasClickedHT=true;
      choice === randomHT ? this.setState({resultHT: 'win'}) : this.setState({resultHT: 'lose'});
    }
    else {
      RPSchoice = choice;
      randomRPS = RPS[Math.floor(Math.random() * RPS.length)];
      hasClickedRPS=true;
      switch(choice) {
        case randomRPS:
          this.setState({resultRPS: 'tie'});
          break;
        case 'rock':
          randomRPS==='scissors' ? this.setState({resultRPS: 'win'}) : this.setState({resultRPS: 'lose'})
          break;
        case 'paper': 
          randomRPS==='scissors' ? this.setState({resultRPS: 'lose'}) : this.setState({resultRPS: 'win'})
          break;
        case 'scissors': 
          randomRPS==='rock' ? this.setState({resultRPS: 'lose'}) : this.setState({resultRPS: 'win'})
          break;
        default:
          return 'hi';
      };
    };
  };

  render() {return (
    <div>
    <HeadsOrTails 
      onClick={this.handleClick}
      resultHT={this.state.resultHT}
      hasClickedHT={hasClickedHT} />
      <br />
    <RockPaperScissors
      onClick={this.handleClick}
      resultRPS={this.state.resultRPS}
      hasClickedRPS={hasClickedRPS}
      choice={RPSchoice}
      randomRPS={randomRPS} />
    </div>
  );
  };
};

export default App;
