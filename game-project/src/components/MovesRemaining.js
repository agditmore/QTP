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
            {props.playerTurn === true ?
                (<div className="moves-remaining-text">You have {determineMovesLeft()} move(s) left in your turn.</div>)
                :(<div className="moves-remaining-text">The computer has {determineMovesLeft()} move(s) left in their turn.</div>)
            }
        </div>
    )
}

export default MovesRemaining;