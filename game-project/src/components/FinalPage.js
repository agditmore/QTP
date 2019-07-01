/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import PirateShip from '../images/Ships/PirateShip.png';
import {
  changeScreen,
  updateGameBoard,
  updatePlayerTurn,
  resetScores,
} from '../redux/actions';

const FinalPage = props => {
  const handlePlayAgain = () => {
    changeScreen('playGame');
    resetScores();
    // props.updateGameBoard(gameBoard)
    updatePlayerTurn(true);
  };

  return (
    <div>
      <div>
        <img src={props.characterImage} alt="Player's Ship" />
        <div>You acquired {props.playerScore} treasures</div>
        <div>You had {props.playerLives} shipwrecks before sinking</div>
      </div>
      <div>
        <img src={PirateShip} alt="Computers Ship" />
        <div>The enemy acquired {props.computerScore} treasures</div>
        <div>The enemy had {props.computerLives} shipwrecks before sinking</div>
      </div>
      {(props.playerScore > props.computerScore &&
        props.computerLives > 0 &&
        props.playerLives > 0) ||
      props.computerLives === 0 ? (
        <div>
          You won! Would you like to play the next level?
          <Button primary onClick={handlePlayAgain}>
            Yes!
          </Button>
          Would you like to play the same level again?
          <Button onClick={handlePlayAgain}>Yes!</Button>
        </div>
      ) : (
        <div>
          You lost! Would you like to play again?
          <Button onClick={handlePlayAgain}>Yes!</Button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerScore: state.playerScore,
    computerScore: state.computerScore,
    characterName: state.characterName,
    playerLives: state.playerLives,
    computerLives: state.computerLives,
    characterImage: state.characterImage,
  };
};

const mapDispatchToProps = {
  changeScreen,
  updateGameBoard,
  resetScores,
  updatePlayerTurn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FinalPage);
