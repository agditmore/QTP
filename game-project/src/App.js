import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Welcome from './components/Welcome';
import ChooseCharacter from './components/ChooseCharacter';
import GameBoard from './components/GameBoard';
import { changeScreen, changeCharacterName } from './redux/actions';

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
          />;
          case "playGame":
            return <GameBoard
              gameBoard={this.props.gameBoard}
            />
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
  changeCharacterName
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
