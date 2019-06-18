import React from 'react';
import DisplayGameBoard from './DisplayGameBoard';
import ScoreBoard from './ScoreBoard';
import { connect } from 'react-redux';
import { updatePlayerTurn, updatePlayerLocation } from './../redux/actions';


class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerRow: 8,
            playerColumn: 0,
            playerMoveCount: 0
        }
    }

    UNSAFE_componentWillMount() {
        document.addEventListener("keydown", this.handleShipMove)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleShipMove)
    }

    updateGameBoard = () => {
        const updatedGameBoard = [];
        let updatedGameRow = [];
        // eslint-disable-next-line array-callback-return
        this.props.gameBoard.map((gameRow) => 
            {(gameRow.map((gameCard) => 
                this.state.playerRow === this.props.gameBoard.indexOf(gameRow) && this.state.playerColumn === gameRow.indexOf(gameCard) ? 
                    updatedGameRow.push({...gameCard, contains: "playerShip"})
                    : gameCard.contains === "playerShip" ? 
                        updatedGameRow.push({...gameCard, contains: "sea"})
                        : updatedGameRow.push(gameCard)
                    )
                )
            updatedGameBoard.push(updatedGameRow)
            updatedGameRow = [];}
        )
        return updatedGameBoard;
    }

    handleShipMove = (event) => {
        if (this.props.playerTurn === true){
           if (event.key === "ArrowUp" && this.state.playerRow > 0){
                this.setState({
                    playerRow: this.state.playerRow-1,
                })
            }
            else if (event.key === "ArrowDown" && this.state.playerRow < 8){
                this.setState({
                    playerRow: this.state.playerRow+1,
                })
            }
            else if (event.key === "ArrowLeft" && this.state.playerColumn > 0){
                this.setState({
                    playerColumn: this.state.playerColumn-1,
                })
            }
            else if (event.key === "ArrowRight" && this.state.playerColumn < 13){
                this.setState({
                    playerColumn: this.state.playerColumn+1,
                }) 
            }
            else if (event.key === "ArrowUp" || "ArrowDown" || "ArrowLeft" || "ArrowRight"){
                alert("Whoops! You almost fell off the board!")
            }
            this.setState({playerMoveCount: this.state.playerMoveCount+1})
        }
        
        this.props.updatePlayerLocation(this.updateGameBoard())

        if (this.state.playerMoveCount > 0 && this.state.playerMoveCount%2 === 0){
            this.props.updatePlayerTurn(false);
        }
    }

    render(){
        return(
            <div>
                <DisplayGameBoard 
                    gameBoard={this.props.gameBoard}
                    handleShipMove={this.handleShipMove}
                />
                <ScoreBoard />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playerTurn: state.playerTurn,
        gameBoard: state.gameBoard,
    }
}

const mapDispatchToProps = {
    updatePlayerTurn,
    updatePlayerLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);