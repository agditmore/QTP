/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';

const MovesRemaining = ({
  playerMoveCount,
  computerMoveCount,
  playerLevel,
  playerTurn,
}) => {
  const determineMovesLeft = () => {
    if (playerTurn === true) {
      return 2 - Math.abs(playerMoveCount - computerMoveCount);
    } else {
      return playerMoveCount - computerMoveCount;
    }
  };

  return (
    <div className="moves-remaining-container">
      <div className="level-text">
        <h3>Level {playerLevel}</h3>
      </div>
      {playerTurn === true ? (
        <div className="moves-remaining-text">
          You have {determineMovesLeft()} move(s) left in your turn.
        </div>
      ) : (
        <div className="moves-remaining-text">
          The enemy has {determineMovesLeft()} move(s) left in their turn.
        </div>
      )}
    </div>
  );
};

export default MovesRemaining;
