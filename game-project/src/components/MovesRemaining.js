import React from 'react';

const MovesRemaining = (props) => {
    console.log(props.playerTurn)
    const determineMovesLeft = () => {
        if (props.playerTurn === true){
            return (2-Math.abs(props.playerMoveCount-props.computerMoveCount))
        } else {
            return (props.playerMoveCount-props.computerMoveCount)
        }
    }

    return(
        <div className="moves-remaining-container">
            <div className="level-text"><h3>Level {props.playerLevel}</h3></div>
            {props.playerTurn === true ?
                (<div className="moves-remaining-text">You have {determineMovesLeft()} move(s) left in your turn.</div>)
                :(<div className="moves-remaining-text">The enemy has {determineMovesLeft()} move(s) left in their turn.</div>)
            }
        </div>
    )
}

export default MovesRemaining;