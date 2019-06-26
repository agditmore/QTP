/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import ModalContainer from './ModalContainer';
import GameCard from './GameCard';

const DisplayGameBoard = ({
  krakenTime,
  challengeQuestions,
  challengeQuestionNumber,
  handleKrakenPlayer,
  alert,
  resetAlert,
  resetAlertAndCheckTurn,
  playerLives,
  computerLives,
  playerScore,
  computerScore,
  handleNextLevel,
  handleSameLevel,
  handleShipMove,
  gameBoard,
  characterImage,
  easterEgg,
}) => {
  return (
    <div className="entire-display-game-container">
      <ModalContainer
        krakenTime={krakenTime}
        challengeQuestions={challengeQuestions}
        challengeQuestionNumber={challengeQuestionNumber}
        handleKrakenPlayer={handleKrakenPlayer}
        alert={alert}
        resetAlert={resetAlert}
        resetAlertAndCheckTurn={resetAlertAndCheckTurn}
        playerLives={playerLives}
        computerLives={computerLives}
        playerScore={playerScore}
        computerScore={computerScore}
        handleNextLevel={handleNextLevel}
        handleSameLevel={handleSameLevel}
      />
      <div
        className="game-board-container"
        onKeyDown={handleShipMove}
        tabIndex="0"
      >
        {gameBoard.map(gameRow => (
          <div className="game-row-container">
            {gameRow.map(gameSquare => (
              <GameCard
                gameSquare={gameSquare}
                characterImage={characterImage}
                easterEgg={easterEgg}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // playerTurn: state.playerTurn,
    gameBoard: state.gameBoard,
    playerScore: state.playerScore,
    playerLives: state.playerLives,
    computerScore: state.computerScore,
    computerLives: state.computerLives,
    // screen: state.screen,
    playerLevel: state.playerLevel,
    challengeQuestions: state.challengeQuestions,
    characterImage: state.characterImage,
    easterEgg: state.easterEgg,
  };
};

export default connect(mapStateToProps)(DisplayGameBoard);
