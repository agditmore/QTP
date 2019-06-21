import React from 'react';
import ModalContainer from './ModalContainer';
import GameCard from './GameCard';
import HowToPlay from './HowToPlay';
import { connect } from 'react-redux';

class DisplayGameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    levelClassName = "level-"+this.props.playerLevel
    
    render() {
        return(
            <div className="entire-display-game-container">
            <ModalContainer
                krakenTime={this.props.krakenTime}
                challengeQuestions={this.props.challengeQuestions}
                challengeQuestionNumber={this.props.challengeQuestionNumber}
                handleKrakenPlayer={this.props.handleKrakenPlayer}
                alert={this.props.alert}
                resetAlert={this.props.resetAlert}
                resetAlertAndCheckTurn={this.props.resetAlertAndCheckTurn}
                playerLives={this.props.playerLives}
                computerLives={this.props.computerLives}
                playerScore={this.props.playerScore}
                computerScore={this.props.computerScore}
                handleNextLevel={this.props.handleNextLevel}
                handleSameLevel={this.props.handleSameLevel}
            />
            <div className="game-board-container" onKeyDown={this.props.handleShipMove} tabIndex="0">
                {this.props.gameBoard.map((gameRow) => 
                    <div className="game-row-container">
                    {gameRow.map((gameSquare) => 
                        <GameCard 
                            gameSquare={gameSquare}
                            characterImage={this.props.characterImage}
                        />
                    )}
                    </div>
                )}
            </div>
            {this.levelClassName === "level-1" ?
            <HowToPlay />
            :null
            }
            </div>
        )
    }
    }

const mapStateToProps = (state) => {
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
        characterImage: state.characterImage
          
    }
}

export default connect(mapStateToProps)(DisplayGameBoard);