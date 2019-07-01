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
  gameBoard,
  characterImage,
  easterEgg,
  gameEndConditions,
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
        easterEgg={easterEgg}
        gameEndConditions={gameEndConditions}
      />
      <div className="game-board-container">
        {gameBoard.map(gameRow => (
          <div className="game-row-container" key={gameBoard[gameRow]}>
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
    gameBoard: state.gameBoard,
    playerScore: state.playerScore,
    playerLives: state.playerLives,
    computerScore: state.computerScore,
    computerLives: state.computerLives,
    playerLevel: state.playerLevel,
    challengeQuestions: state.challengeQuestions,
    characterImage: state.characterImage,
    easterEgg: state.easterEgg,
  };
};

export default connect(mapStateToProps)(DisplayGameBoard);
