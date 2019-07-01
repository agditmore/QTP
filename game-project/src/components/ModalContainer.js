/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Modal, Button, TransitionablePortal } from 'semantic-ui-react';
import AddQuestion from './AddQuestion';

const ModalContainer = ({
  easterEgg,
  openAddQuestion,
  resetAlert,
  alert,
  krakenTime,
  challengeQuestions,
  challengeQuestionNumber,
  handleKrakenPlayer,
  playerLives,
  computerLives,
  playerScore,
  computerScore,
  handleSameLevel,
  handleNextLevel,
}) => {
  let enemyEncounter = '';
  let randomEvent = '';
  let winPoints = '';
  if (easterEgg) {
    enemyEncounter = 'eagle attack';
    randomEvent = 'tornado';
    winPoints = 'golden feathers';
  } else {
    enemyEncounter = 'Kraken';
    randomEvent = 'whirlpool';
    winPoints = 'treasure chests';
  }

  return (
    <>
      <AddQuestion
        openAddQuestion={openAddQuestion}
        resetAlert={resetAlert}
        alert={alert}
      />
      <Modal open={krakenTime}>
        <Modal.Header>
          <h2>Oh no! You unleashed a {enemyEncounter}!</h2>
        </Modal.Header>
        <Modal.Content>
          {challengeQuestions[challengeQuestionNumber].question}
        </Modal.Content>
        <div className="trivia-answer-container">
          {challengeQuestions[challengeQuestionNumber].answers.map(
            answerObject => {
              if (
                answerObject.id ===
                challengeQuestions[challengeQuestionNumber].correctAnswer
              ) {
                return (
                  <Button
                    onClick={() =>
                      handleKrakenPlayer(
                        'correct',
                        challengeQuestions[challengeQuestionNumber].id,
                      )
                    }
                    key={answerObject.id}
                  >
                    {answerObject.answer}
                  </Button>
                );
                // eslint-disable-next-line no-else-return
              } else {
                return (
                  <Button
                    onClick={() =>
                      handleKrakenPlayer('incorrect', answerObject.id)
                    }
                    key={answerObject.id}
                  >
                    {answerObject.answer}
                  </Button>
                );
              }
            },
          )}
          <br />
        </div>
      </Modal>
      <TransitionablePortal
        open={alert === 'computerKrakenSuccess'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'computerKrakenSuccess'} size="mini">
          <Modal.Content>
            <h2>The enemy defeated the {enemyEncounter}!</h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'computerKrakenFailure'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'computerKrakenFailure'} size="mini">
          <Modal.Content>
            <h2>The enemy was defeated by the {enemyEncounter}!</h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'playerKrakenSuccess'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'playerKrakenSuccess'} size="mini">
          <Modal.Content>
            <h2>
              Congratulations! You defeated the {enemyEncounter} and survived
              the encounter unscathed.
            </h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'playerKrakenFailure'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'playerKrakenFailure'} size="mini">
          <Modal.Content>
            {playerLives > 0 ? (
              <h2>
                Alas! You did not defeat the {enemyEncounter}. Only{' '}
                {playerLives} more {enemyEncounter}s before sinking!
              </h2>
            ) : (
              <h2>
                Alas! You did not defeat the {enemyEncounter}. You're starting
                to float downwards...
              </h2>
            )}
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'playerFoundWhirlpool'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'playerFoundWhirlpool'} size="mini">
          <Modal.Content>
            <h2>You hit a {randomEvent}!</h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'computerFoundWhirlpool'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'computerFoundWhirlpool'} size="mini">
          <Modal.Content>
            <h2>The enemy hit a {randomEvent}!</h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'playerFoundTreasure'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'playerFoundTreasure'} size="mini">
          <Modal.Content>
            <h2>You struck gold!</h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'playerIllegalMove'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'playerIllegalMove'} size="mini">
          <Modal.Content>
            <h2>Whoops! You almost fell off the board!</h2>
          </Modal.Content>
        </Modal>
      </TransitionablePortal>
      <TransitionablePortal
        open={alert === 'gameEnd'}
        transition={{ animation: 'scale', duration: 750 }}
      >
        <Modal open={alert === 'gameEnd'}>
          {(playerScore > computerScore && playerLives > 0) ||
          computerLives === 0 ? (
            <>
              <Modal.Header>
                <h2>You won!</h2>
              </Modal.Header>
              <Modal.Content>
                {computerLives === 0 ? (
                  <h2>The enemy perished!</h2>
                ) : (
                  <h2>You acquired more {winPoints} than the enemy!</h2>
                )}
                <h4>Would you like to play the next level?</h4>
                <Button primary onClick={handleNextLevel}>
                  Yes!
                </Button>
              </Modal.Content>
              <Modal.Content>
                <h4>Would you like to play the same level again?</h4>
                <Button onClick={handleSameLevel}>Yes!</Button>
              </Modal.Content>
            </>
          ) : playerScore === computerScore &&
            playerLives > 0 &&
            computerLives > 0 ? (
            <>
              <Modal.Header>
                <h2>You tied!</h2>
              </Modal.Header>
              <Modal.Content>
                <h2>
                  Your player and enemy acquired the same amount of {winPoints}.
                </h2>
                <h4>Would you like to play again?</h4>
                <Button onClick={handleSameLevel}>Yes!</Button>
              </Modal.Content>
            </>
          ) : (
            <>
              <Modal.Header>
                <h2>You lost!</h2>
              </Modal.Header>
              <Modal.Content>
                {playerLives === 0 ? (
                  <h2>Your player perished!</h2>
                ) : (
                  <h2>The enemy acquired more {winPoints}.</h2>
                )}
                <h4>Would you like to play again?</h4>
                <Button onClick={handleSameLevel}>Yes!</Button>
              </Modal.Content>
            </>
          )}
        </Modal>
      </TransitionablePortal>
    </>
  );
};

export default ModalContainer;
