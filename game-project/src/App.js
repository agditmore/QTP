import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Welcome from './components/Welcome';
import ChooseCharacter from './components/ChooseCharacter';
import GameBoard from './components/GameBoard';
import FinalPage from './components/FinalPage';
import { changeScreen, changeCharacterName, changeCharacterImage, playEasterEgg } from './redux/actions';

class App extends React.Component {
  handleChangeScreen = (newScreen) => {
    this.props.changeScreen(newScreen)
  }

  handleChangeCharacterName = (newCharacterName) => {
    this.props.changeCharacterName(newCharacterName.trim())
  }

  render(){
      switch(this.props.screen){
        case "welcome":
          return <Welcome 
            changeScreen={this.handleChangeScreen}
          />;
        case "chooseCharacter":
          return <ChooseCharacter
            changeCharacterName={this.handleChangeCharacterName}
            reduxCharacterName={this.props.characterName}
            changeScreen={this.handleChangeScreen}
            changeCharacterImage={this.props.changeCharacterImage}
            playEasterEgg={this.props.playEasterEgg}
          />;
        case "playGame":
          return <GameBoard
          />;
        case "finalPage":
          return <FinalPage />
        default:
          return <Welcome />
      }
  }
}

const mapStateToProps = (state) => {
  return{
    screen: state.screen,
    characterName: state.characterName,
    gameBoard: state.gameBoard,
    playerTurn: state.playerTurn,
  }
}

const mapDispatchToProps = {
  changeScreen,
  changeCharacterName,
  changeCharacterImage,
  playEasterEgg,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
