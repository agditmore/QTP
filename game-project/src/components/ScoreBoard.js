import React from 'react';
import PirateShip from './../images/Ships/PirateShip.png';
import { connect } from 'react-redux';

const ScoreBoard = (props) => {
    return(
        <div className="entire-scoreboard">
        <div className="scoreboard-card">
            <img src={props.characterImage} alt="Player's Ship" />
            <h4>{props.characterName} Ship</h4>
            <div>{props.playerScore} treasures</div>
            <div>{props.playerLives} shipwrecks before sinking </div>
        </div>
        <div className="scoreboard-card">
            <img src={PirateShip} alt="Computer's Ship" />
            <h4>The Enemy Ship</h4>
            <div>{props.computerScore} treasures</div>
            <div>{props.computerLives} shipwrecks before sinking </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        playerScore: state.playerScore,
        playerLives: state.playerLives,
        computerScore: state.computerScore,
        computerLives: state.computerLives,
        characterName: state.characterName,
        characterImage: state.characterImage,
    }
}

export default connect(mapStateToProps)(ScoreBoard);