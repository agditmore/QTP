import React from 'react';
import Rock from './Images/Rock.jpg';
import Paper from './Images/Paper.jpg';
import Scissors from './Images/Scissors.png';

const RockPaperScissors = (props) => {
    return (
        <div>
            <h1>Rock, Paper, Scissors, Shoot!</h1>
            <div id="rps-container">
                <img className="column" src={Rock} alt="rock" onClick={() => props.onClick("rock", "RPS")}></img>
                <img className="column" src={Paper} alt="paper" onClick={() => props.onClick("paper", "RPS")}></img>
                <img className="column" src={Scissors} alt="scissors" onClick={() => props.onClick("scissors", "RPS")}></img>
            </div>
            <div style={{display: props.hasClickedRPS ? "block" : "none"}} id="result-container">
                {<h2>You chose {props.choice}, and your opponent chose {props.randomRPS}. You {props.resultRPS}!</h2>}
            </div>
        </div>
    )
}

export default RockPaperScissors;