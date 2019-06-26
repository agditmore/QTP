import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import AddQuestion from './AddQuestion';

const ModalContainer = (props) => {
    let enemyEncounter =  '';
    let randomEvent = '';
    if (props.easterEgg){
        enemyEncounter = "eagle attack";
        randomEvent = "tornado";
    } else {
        enemyEncounter = "Kraken";
        randomEvent = "whirlpool";
    }
    return(
        <>
        <AddQuestion
            openAddQuestion={props.openAddQuestion}
            resetAlert={props.resetAlert}
            alert={props.alert}
        />
        <Modal open={props.krakenTime}>
            <Modal.Header><h2>Oh no! You unleashed a {enemyEncounter}!</h2></Modal.Header>
            <Modal.Content>{props.challengeQuestions[props.challengeQuestionNumber].question}</Modal.Content>
                <div className="trivia-answer-container">
                {props.challengeQuestions[props.challengeQuestionNumber].answers.map((answerObject)=>
                    {if (answerObject.id === props.challengeQuestions[props.challengeQuestionNumber].correctAnswer){
                            return(
                                <Button onClick={()=>props.handleKrakenPlayer("correct")} key={answerObject.id}>{answerObject.answer}</Button>
                            )
                        }
                        else {
                            return(
                                <Button onClick={()=>props.handleKrakenPlayer("incorrect")} key={answerObject.id}>{answerObject.answer}</Button>
                        )}
                    }
                )
                }<br /></div>
        </Modal>
        <Modal open={props.alert === "computerKrakenSuccess"} size="mini">
            <Modal.Content>
                <h2>The enemy defeated the {enemyEncounter}!</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "computerKrakenFailure"} size="mini">
            <Modal.Content>
                <h2>The enemy was defeated by the {enemyEncounter}!</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "playerKrakenSuccess"} size="mini">
            <Modal.Content>
                <h2>Congratulations! You defeated the {enemyEncounter} and survived the encounter unscathed.</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "playerKrakenFailure"} size="mini">
            <Modal.Content>
                <h2>Alas! You did not defeat the {enemyEncounter}. Only {props.playerLives} more {enemyEncounter}s before sinking!</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "playerFoundWhirlpool"} size="mini">
            <Modal.Content>
                <h2>You hit a {randomEvent}!</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "computerFoundWhirlpool"} size="mini">
            <Modal.Content>
                <h2>The enemy hit a {randomEvent}!</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "playerFoundTreasure"} size="mini">
            <Modal.Content>
                <h2>You struck gold!</h2>
                <Button onClick={props.resetAlertAndCheckTurn}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "playerIllegalMove"} size="mini">
            <Modal.Content>
                <h2>Whoops! You almost fell off the board!</h2>
                <Button onClick={props.resetAlert}>OK</Button>
            </Modal.Content>
        </Modal>
        <Modal open={props.alert === "gameEnd"}>
        {((props.playerScore > props.computerScore) && (props.playerLives > 0)) || (props.computerLives === 0) ?
        <><Modal.Header>You won!</Modal.Header>
        <Modal.Content>
            <h4>Would you like to play the next level?</h4>
            <Button primary onClick={props.handleNextLevel}>Yes!</Button>
        </Modal.Content>
        <Modal.Content>
            <h4>Would you like to play the same level again?</h4>
            <Button onClick={props.handleSameLevel}>Yes!</Button>
        </Modal.Content> </>
        : (props.playerScore === props.computerScore) && (props.playerLives > 0) && (props.computerLives > 0) ?
        <><Modal.Header>You tied!</Modal.Header>
        <Modal.Content>
            <h4>Would you like to play again?</h4>
            <Button onClick={props.handleSameLevel}>Yes!</Button>
        </Modal.Content></>
        : <><Modal.Header>You lost!</Modal.Header>
        <Modal.Content>
            <h4>Would you like to play again?</h4>
            <Button onClick={props.handleSameLevel}>Yes!</Button>
        </Modal.Content></>
        }
        </Modal>
        </>
    )
}

export default ModalContainer;
