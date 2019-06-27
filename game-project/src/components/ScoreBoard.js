/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import PirateShip from '../images/Ships/PirateShip.png';
import Dragon from '../images/Dragon.png';

const ScoreBoard = props => {
  return (
    <div className="entire-scoreboard">
      <div className="scoreboard-card">
        <img
          src={props.characterImage}
          alt="Player's Ship"
          className="game-img"
        />
        <h4>{props.characterName}</h4>
        {props.easterEgg ? (
          <>
            <div>{props.playerScore} golden feathers</div>
            <div>{props.playerLives} eagle attacks before falling </div>
          </>
        ) : (
          <>
            <div>{props.playerScore} treasures</div>
            <div>{props.playerLives} shipwrecks before sinking </div>
          </>
        )}
      </div>
      <div className="scoreboard-card">
        {props.easterEgg ? (
          <>
            <img src={Dragon} alt="Computer's Ship" className="game-img" />
            <h4>One Missing Bracket</h4>
            <div>{props.computerScore} golden feathers</div>
            <div>{props.computerLives} eagle attacks before falling </div>
          </>
        ) : (
          <>
            <img src={PirateShip} alt="Computer's Ship" className="game-img" />
            <h4>The Enemy Ship</h4>
            <div>{props.computerScore} treasures</div>
            <div>{props.computerLives} shipwrecks before sinking </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerScore: state.playerScore,
    playerLives: state.playerLives,
    computerScore: state.computerScore,
    computerLives: state.computerLives,
    characterName: state.characterName,
    characterImage: state.characterImage,
    easterEgg: state.easterEgg,
  };
};

export default connect(mapStateToProps)(ScoreBoard);
