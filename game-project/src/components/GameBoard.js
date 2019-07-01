/* eslint-disable react/no-unused-state */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-else-return */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Progress } from 'semantic-ui-react';
import DisplayGameBoard from './DisplayGameBoard';
import ScoreBoard from './ScoreBoard';
import {
  updatePlayerTurn,
  updateGameBoard,
  changePlayerScore,
  changeComputerScore,
  changeScreen,
  increasePlayerLevel,
  resetScores,
  decreaseComputerLives,
  decreasePlayerLives,
  resetLives,
  changeChallengeQuestions,
  updateAllChallengeQuestions,
} from '../redux/actions';
import HowToPlay from './HowToPlay';
import MovesRemaining from './MovesRemaining';
import Header from './Header';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerRow: 8,
      playerColumn: 0,
      playerMoveCount: 0,
      playerDirection: '',
      enemyRow: 0,
      enemyColumn: 9,
      enemyDirection: '',
      treasureLocations: [],
      numberOfTreasureChests: 10,
      maxRows: 8,
      maxColumns: 9,
      maxWhirlpools: 5,
      maxTreasures: 5,
      maxKraken: 5,
      alert: '',
      krakenTime: false,
      challengeQuestionNumber: 0,
      gameEndConditions: false,
      computerMoveCount: 0,
      counter: 2,
      pauseBetweenPlayerMoves: false,
      progressPercent: 0,
      gameLog: ["It's your turn! Use your arrow keys to move."],
      showGameLog: false,
    };
    this.enemyEncounter = this.props.easterEgg ? 'eagle attack' : 'Kraken';
    this.randomEvent = this.props.easterEgg ? 'tornado' : 'whirlpool';
    this.winPoints = this.props.easterEgg ? 'golden feather' : 'treasure chest';
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleShipMove);
    this.generateGameBoard();
    this.filterChallengeQuestions();
    this.shuffleChallengeQuestions();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleShipMove);
    clearTimeout(this.computerWhirlpoolTimeout);
    clearTimeout(this.playerWhirlpoolTimeout);
    clearTimeout(this.playerCollisionTimeout);
    clearTimeout(this.computerCollisionTimeout);
    clearTimeout(this.firstComputerMoveTimeout);
    clearTimeout(this.secondComputerMoveTimeout);
    clearTimeout(this.updatePlayerTurnTimeout);
    clearTimeout(this.treasureTimeout);
    clearTimeout(this.computerTreasureTimeout);
    clearTimeout(this.gameEndTimeout);
    clearTimeout(this.gameEndTimeout2);
    clearTimeout(this.checkGameEndTimeout);
    clearTimeout(this.checkTurnTimeout);
    clearTimeout(this.newGameGenerationTimeout);
    clearTimeout(this.playerWhirlpoolAlertTimeout);
    clearTimeout(this.computerWhirlpoolAlertTimeout);
    clearTimeout(this.playerTreasureTimeout);
    clearTimeout(this.illegalMoveTimeout);
    clearTimeout(this.computerKrakenTimeout);
    clearTimeout(this.playerKrakenTimeout);
    clearTimeout(this.filterChallengeQuestions);
  }

  generateGameBoard = () => {
    const newGameBoard = [];
    for (
      let numberRows = 0;
      numberRows < this.state.maxRows + 1;
      numberRows += 1
    ) {
      const newRow = [];
      for (
        let numberColumns = 0;
        numberColumns < this.state.maxColumns + 1;
        numberColumns += 1
      ) {
        newRow.push({
          contains: 'sea',
          id: numberRows.toString() + numberColumns.toString(),
        });
      }
      newGameBoard.push(newRow);
    }
    newGameBoard[0][this.state.maxColumns].contains = 'computerShip';
    newGameBoard[this.state.maxRows][0].contains = 'playerShip';
    this.setState({
      playerRow: this.state.maxRows,
      playerColumn: 0,
      enemyRow: 0,
      enemyColumn: this.state.maxColumns,
    });
    for (
      let numberWhirlpools = 0;
      numberWhirlpools < this.state.maxWhirlpools;
      numberWhirlpools += 1
    ) {
      const [newRow, newColumn] = this.getRandomLocation(newGameBoard);
      newGameBoard[newRow][newColumn].contains = 'whirlpool';
    }
    for (
      let numberTreasures = 0;
      numberTreasures < this.state.maxTreasures;
      numberTreasures += 1
    ) {
      const [newRow, newColumn] = this.getRandomLocation(newGameBoard);
      newGameBoard[newRow][newColumn].contains = 'treasureChestTreasure';
    }
    for (
      let numberKraken = 0;
      numberKraken < this.state.maxKraken;
      numberKraken += 1
    ) {
      const [newRow, newColumn] = this.getRandomLocation(newGameBoard);
      newGameBoard[newRow][newColumn].contains = 'treasureChestKraken';
    }
    this.props.updateGameBoard(newGameBoard);
  };

  getRandomLocation = gameBoard => {
    let newRow = Math.floor(Math.random() * (this.state.maxRows + 1));
    let newColumn = Math.floor(Math.random() * (this.state.maxColumns + 1));
    while (gameBoard[newRow][newColumn].contains !== 'sea') {
      newRow = Math.floor(Math.random() * (this.state.maxRows + 1));
      newColumn = Math.floor(Math.random() * (this.state.maxColumns + 1));
    }
    return [newRow, newColumn];
  };

  handleTreasure = ship => {
    if (ship === 'playerShip') {
      this.setState({ alert: 'playerFoundTreasure' });
      this.props.changePlayerScore(1);
      this.playerTreasureTimeout = setTimeout(
        this.resetAlertAndCheckTurn,
        1250,
      );
    } else if (ship === 'computerShip') {
      this.props.changeComputerScore(1);
    }
    this.setState({
      numberOfTreasureChests: this.state.numberOfTreasureChests - 1,
    });
    this.getProgressPercent();
  };

  resetAlertAndCheckTurn = () => {
    this.setState({ alert: '' });
    this.checkTurnTimeout = setTimeout(this.checkTurn, 150);
  };

  resetAlert = () => {
    this.setState({ alert: '' });
  };

  openAddQuestion = () => {
    this.setState({ alert: 'addQuestion' });
  };

  handleWhirlpool = ship => {
    const [newRow, newColumn] = this.getRandomLocation(this.props.gameBoard);
    if (ship === 'playerShip') {
      this.setState({
        playerRow: newRow,
        playerColumn: newColumn,
        alert: 'playerFoundWhirlpool',
      });
      this.playerWhirlpoolTimeout = setTimeout(
        () =>
          this.props.updateGameBoard(this.updatePlayerPositionOnGameBoard()),
        250,
      );
      this.playerWhirlpoolAlertTimeout = setTimeout(
        this.resetAlertAndCheckTurn,
        1250,
      );
    } else {
      this.setState({
        enemyRow: newRow,
        enemyColumn: newColumn,
        alert: 'computerFoundWhirlpool',
      });
      this.computerWhirlpoolTimeout = setTimeout(
        () =>
          this.props.updateGameBoard(this.updateComputerPositionOnGameBoard()),
        250,
      );
      this.computerWhirlpoolAlertTimeout = setTimeout(
        this.resetAlertAndCheckTurn,
        1250,
      );
    }
  };

  determineCollision = (direction, hitShipLocation, aggressorLocation) => {
    let boundary;
    if (direction === 'down') {
      boundary = this.state.maxRows;
    } else if (direction === 'right') {
      boundary = this.state.maxColumns;
    }
    if (direction === 'up' || direction === 'left') {
      if (hitShipLocation - 3 >= 0) {
        return { hitShipLocation: hitShipLocation - 3, aggressorLocation };
      } else if (hitShipLocation === 0) {
        return { hitShipLocation: 0, aggressorLocation: 1 };
      } else {
        return { hitShipLocation: 0, aggressorLocation };
      }
    } else if (direction === 'down' || direction === 'right') {
      if (hitShipLocation + 3 <= boundary) {
        return { hitShipLocation: hitShipLocation + 3, aggressorLocation };
      } else if (hitShipLocation === boundary) {
        return { hitShipLocation: boundary, aggressorLocation: boundary - 1 };
      } else {
        return { hitShipLocation: boundary, aggressorLocation };
      }
    }
  };

  handleCollision = ship => {
    let updatedLocations;
    if (ship === 'playerShip') {
      if (
        this.state.playerDirection === 'up' ||
        this.state.playerDirection === 'down'
      ) {
        updatedLocations = this.determineCollision(
          this.state.playerDirection,
          this.state.enemyRow,
          this.state.playerRow,
        );
        this.setState({
          enemyRow: updatedLocations.hitShipLocation,
          playerRow: updatedLocations.aggressorLocation,
        });
      } else {
        updatedLocations = this.determineCollision(
          this.state.playerDirection,
          this.state.enemyColumn,
          this.state.playerColumn,
        );
        this.setState({
          enemyColumn: updatedLocations.hitShipLocation,
          playerColumn: updatedLocations.aggressorLocation,
        });
      }
      this.playerCollisionTimeout = setTimeout(
        () =>
          this.props.updateGameBoard(this.updateComputerPositionOnGameBoard()),
        100,
      );
    } else if (ship === 'computerShip') {
      if (
        this.state.enemyDirection === 'up' ||
        this.state.enemyDirection === 'down'
      ) {
        updatedLocations = this.determineCollision(
          this.state.enemyDirection,
          this.state.playerRow,
          this.state.enemyRow,
        );
        this.setState({
          playerRow: updatedLocations.hitShipLocation,
          enemyRow: updatedLocations.aggressorLocation,
        });
      } else {
        updatedLocations = this.determineCollision(
          this.state.enemyDirection,
          this.state.playerColumn,
          this.state.enemyColumn,
        );
        this.setState({
          playerColumn: updatedLocations.hitShipLocation,
          enemyColumn: updatedLocations.aggressorLocation,
        });
      }
      this.computerCollisionTimeout = setTimeout(
        () =>
          this.props.updateGameBoard(this.updatePlayerPositionOnGameBoard()),
        100,
      );
    }
  };

  checkComputerKrakenSuccess = (randomNumberForOdds, successChance) => {
    const updatedGameLog = this.state.gameLog;
    if (randomNumberForOdds <= successChance) {
      updatedGameLog.unshift(`The enemy defeated the ${this.enemyEncounter}`);
      this.setState({
        alert: 'computerKrakenSuccess',
        gameLog: updatedGameLog,
      });
    } else {
      this.props.decreaseComputerLives();
      updatedGameLog.unshift(
        `The enemy was defeated by the ${this.enemyEncounter}`,
      );
      this.setState({
        alert: 'computerKrakenFailure',
        gameLog: updatedGameLog,
      });
      this.checkGameEnd();
    }
    this.computerKrakenTimeout = setTimeout(this.resetAlertAndCheckTurn, 1250);
  };

  handleKrakenComputer = () => {
    this.setState({
      numberOfTreasureChests: this.state.numberOfTreasureChests - 1,
    });
    const randomNumberForOdds = Math.floor(Math.random() * 100) + 1;
    switch (this.props.playerLevel) {
      case 1:
        this.checkComputerKrakenSuccess(randomNumberForOdds, 50);
        break;
      case 2:
        this.checkComputerKrakenSuccess(randomNumberForOdds, 65);
        break;
      case 3:
        this.checkComputerKrakenSuccess(randomNumberForOdds, 80);
        break;
      case 4:
        this.checkComputerKrakenSuccess(randomNumberForOdds, 90);
        break;
      default:
        this.checkComputerKrakenSuccess(randomNumberForOdds, 99);
        break;
    }
    this.getProgressPercent();
  };

  handleKrakenPlayer = (response, askedId) => {
    this.setState({
      krakenTime: false,
    });
    const updatedGameLog = this.state.gameLog;
    if (response === 'correct') {
      updatedGameLog.unshift(`You defeated the ${this.enemyEncounter}`);
      this.setState({ alert: 'playerKrakenSuccess', gameLog: updatedGameLog });
    } else if (response === 'incorrect') {
      this.props.decreasePlayerLives();
      updatedGameLog.unshift(`You were defeated by the ${this.enemyEncounter}`);
      this.setState({ alert: 'playerKrakenFailure', gameLog: updatedGameLog });
    }
    this.playerKrakenTimeout = setTimeout(this.resetAlertAndCheckTurn, 2000);

    const updatedAskedQuestions = [];
    this.props.allChallengeQuestions.map(challengeQuestion => {
      if (challengeQuestion.id === askedId) {
        updatedAskedQuestions.push({ ...challengeQuestion, asked: true });
      } else {
        updatedAskedQuestions.push(challengeQuestion);
      }
    });
    this.props.updateAllChallengeQuestions(updatedAskedQuestions);

    if (
      this.state.challengeQuestionNumber <
      this.props.challengeQuestions.length - 1
    ) {
      this.setState({
        challengeQuestionNumber: this.state.challengeQuestionNumber + 1,
      });
    } else {
      this.shuffleChallengeQuestions();
      this.setState({ challengeQuestionNumber: 0 });
    }
    this.getProgressPercent();
  };

  checkGameEnd = () => {
    if (this.state.alert === '' && this.state.krakenTime === false) {
      this.checkGameEndNoStops();
    }
  };

  checkGameEndNoStops = () => {
    if (
      this.state.numberOfTreasureChests === 0 &&
      this.state.playerMoveCount > 0
    ) {
      this.setState({ alert: 'gameEnd', gameEndConditions: true });
    } else if (this.props.computerLives === 0 || this.props.playerLives === 0) {
      this.setState({ alert: 'gameEnd', gameEndConditions: true });
    }
  };

  handleSameLevel = () => {
    this.setState({
      numberOfTreasureChests: 0,
      playerMoveCount: 0,
      treasureLocations: [],
      gameEndConditions: false,
      computerMoveCount: 0,
      counter: 2,
      progressPercent: 0,
      gameLog: ["It's your turn! Use your arrow keys to move."],
    });
    this.props.resetLives({
      playerLives: 3,
      computerLives: 1 + this.props.playerLevel * 2,
    });
    this.props.resetScores();
    this.generateGameBoard();
    this.props.updatePlayerTurn(true);
    this.resetAlert();
  };

  handleNextLevel = () => {
    let oddTreasureTest = Math.ceil(this.state.maxTreasures * 1.5);
    if (oddTreasureTest % 2 === 0) {
      oddTreasureTest += 1;
    }
    this.setState({
      maxRows: Math.ceil(this.state.maxRows * 1.5),
      maxColumns: Math.ceil(this.state.maxColumns * 1.5),
      maxWhirlpools: Math.ceil(this.state.maxWhirlpools * 2.3),
      maxTreasures: oddTreasureTest,
      maxKraken: Math.ceil(this.state.maxKraken * 3),
      numberOfTreasureChests: 0,
      playerMoveCount: 0,
      treasureLocations: [],
      gameEndConditions: false,
      computerMoveCount: 0,
      counter: 2,
      progressPercent: 0,
      gameLog: ["It's your turn! Use your arrow keys to move."],
      challengeQuestionNumber: 0,
    });
    this.props.increasePlayerLevel();
    this.props.resetScores();
    this.newGameGenerationTimeout = setTimeout(this.generateGameBoard, 200);
    this.props.updatePlayerTurn(true);
    this.props.resetLives({
      playerLives: 3,
      computerLives: 1 + this.props.playerLevel * 2,
    });
    this.filterQuestionsTimeout = setTimeout(
      this.filterChallengeQuestions,
      100,
    );
    this.shuffleQuestionsTimeout = setTimeout(
      this.shuffleChallengeQuestions,
      120,
    );
    this.resetAlert();
  };

  updatePlayerPositionOnGameBoard = () => {
    const updatedGameBoard = [];
    let updatedGameRow = [];
    const updatedGameLog = this.state.gameLog;
    const ship = 'playerShip';

    if (
      this.state.playerRow === this.state.enemyRow &&
      this.state.playerColumn === this.state.enemyColumn
    ) {
      this.handleCollision('playerShip');
    }
    this.props.gameBoard.map(gameRow => {
      gameRow.map(gameCard => {
        if (
          this.state.playerRow === this.props.gameBoard.indexOf(gameRow) &&
          this.state.playerColumn === gameRow.indexOf(gameCard)
        ) {
          switch (gameCard.contains) {
            case 'sea':
              updatedGameRow.push({ ...gameCard, contains: ship });
              break;
            case 'treasureChestTreasure':
              updatedGameRow.push({ ...gameCard, contains: ship });
              updatedGameLog.unshift(`You acquired a ${this.winPoints}`);
              this.setState({ gameLog: updatedGameLog });
              this.handleTreasure(ship);
              break;
            case 'treasureChestKraken':
              updatedGameRow.push({ ...gameCard, contains: ship });
              this.setState({
                krakenTime: true,
                numberOfTreasureChests: this.state.numberOfTreasureChests - 1,
              });
              break;
            case 'whirlpool':
              updatedGameRow.push({ ...gameCard, contains: 'sea' });
              updatedGameLog.unshift(`You acquired a ${this.randomEvent}`);
              this.setState({ gameLog: updatedGameLog });
              this.handleWhirlpool(ship);
              break;
            case 'computerShip':
              updatedGameRow.push({ ...gameCard, contains: ship });
              updatedGameLog.unshift(`You collided with the enemy`);
              this.setState({ gameLog: updatedGameLog });
              break;
            default:
              updatedGameRow.push(gameCard);
              break;
          }
        } else if (gameCard.contains === ship) {
          updatedGameRow.push({ ...gameCard, contains: 'sea' });
        } else {
          updatedGameRow.push(gameCard);
        }
      });
      updatedGameBoard.push(updatedGameRow);
      updatedGameRow = [];
    });
    this.checkTurn();
    return updatedGameBoard;
  };

  updateComputerPositionOnGameBoard = () => {
    const updatedGameBoard = [];
    let updatedGameRow = [];
    const ship = 'computerShip';
    const updatedGameLog = this.state.gameLog;

    if (
      this.state.playerRow === this.state.enemyRow &&
      this.state.playerColumn === this.state.enemyColumn
    ) {
      this.handleCollision(ship);
    }
    this.props.gameBoard.map(gameRow => {
      gameRow.map(gameCard => {
        if (
          this.state.enemyRow === this.props.gameBoard.indexOf(gameRow) &&
          this.state.enemyColumn === gameRow.indexOf(gameCard)
        ) {
          switch (gameCard.contains) {
            case 'sea':
              updatedGameRow.push({ ...gameCard, contains: ship });
              break;
            case 'treasureChestTreasure':
              updatedGameRow.push({ ...gameCard, contains: ship });
              this.computerTreasureTimeout = setTimeout(
                () => this.handleTreasure(ship),
                150,
              );
              updatedGameLog.unshift(`The enemy acquired a ${this.winPoints}`);
              this.setState({ gameLog: updatedGameLog });
              this.checkGameEnd();
              break;
            case 'treasureChestKraken':
              this.handleKrakenComputer();
              updatedGameRow.push({ ...gameCard, contains: ship });
              break;
            case 'whirlpool':
              updatedGameRow.push({ ...gameCard, contains: 'sea' });
              this.handleWhirlpool(ship);
              updatedGameLog.unshift(
                `The enemy encountered a ${this.randomEvent}`,
              );
              this.setState({ gameLog: updatedGameLog });
              break;
            case 'playerShip':
              updatedGameRow.push({ ...gameCard, contains: ship });
              updatedGameLog.unshift('The enemy collided with you');
              this.setState({ gameLog: updatedGameLog });
              break;
            default:
              updatedGameRow.push(gameCard);
              break;
          }
        } else if (gameCard.contains === ship) {
          updatedGameRow.push({ ...gameCard, contains: 'sea' });
        } else {
          updatedGameRow.push(gameCard);
        }
      });
      updatedGameBoard.push(updatedGameRow);
      updatedGameRow = [];
    });
    this.gameEndTimeout = setTimeout(this.checkGameEnd, 500);
    return updatedGameBoard;
  };

  getTreasureLocations = () => {
    const updatedTreasureLocations = [];
    this.props.gameBoard.map(gameRow =>
      gameRow.map(gameCard => {
        if (
          gameCard.contains === 'treasureChestTreasure' ||
          gameCard.contains === 'treasureChestKraken'
        ) {
          updatedTreasureLocations.push({
            row: this.props.gameBoard.indexOf(gameRow),
            column: gameRow.indexOf(gameCard),
          });
        }
      }),
    );
    this.setState({
      treasureLocations: updatedTreasureLocations,
      numberOfTreasureChests: updatedTreasureLocations.length,
    });
  };

  handleEnemyMove = () => {
    this.checkGameEnd();
    this.getTreasureLocations();
    const treasureDistance = [];
    this.state.treasureLocations.map(location =>
      treasureDistance.push(
        Math.abs(location.row - this.state.enemyRow) +
          Math.abs(location.column - this.state.enemyColumn),
      ),
    );
    const minDistance = Math.min(...treasureDistance);
    const closestTreasureLocation = this.state.treasureLocations[
      treasureDistance.indexOf(minDistance)
    ];
    closestTreasureLocation.row === this.state.enemyRow
      ? closestTreasureLocation.column > this.state.enemyColumn
        ? this.setState({
            enemyColumn: this.state.enemyColumn + 1,
            enemyDirection: 'right',
            computerMoveCount: this.state.computerMoveCount + 1,
          })
        : this.setState({
            enemyColumn: this.state.enemyColumn - 1,
            enemyDirection: 'left',
            computerMoveCount: this.state.computerMoveCount + 1,
          })
      : closestTreasureLocation.row > this.state.enemyRow
      ? this.setState({
          enemyRow: this.state.enemyRow + 1,
          enemyDirection: 'down',
          computerMoveCount: this.state.computerMoveCount + 1,
        })
      : this.setState({
          enemyRow: this.state.enemyRow - 1,
          enemyDirection: 'up',
          computerMoveCount: this.state.computerMoveCount + 1,
        });
    this.props.updateGameBoard(this.updateComputerPositionOnGameBoard());
    this.setState({ counter: 2 });
  };

  togglePause = () => {
    this.setState({
      pauseBetweenPlayerMoves: !this.state.pauseBetweenPlayerMoves,
    });
  };

  handleShipMove = event => {
    this.getTreasureLocations();
    this.checkGameEnd();
    if (
      this.props.playerTurn === true &&
      this.state.alert === '' &&
      this.state.krakenTime === false &&
      this.state.counter > 0 &&
      this.state.pauseBetweenPlayerMoves === false
    ) {
      this.togglePause();
      this.playerPauseTimeout = setTimeout(this.togglePause, 250);
      if (event.key === 'ArrowUp' && this.state.playerRow > 0) {
        this.setState({
          playerRow: this.state.playerRow - 1,
          playerDirection: 'up',
          playerMoveCount: this.state.playerMoveCount + 1,
          counter: this.state.counter - 1,
        });
      } else if (
        event.key === 'ArrowDown' &&
        this.state.playerRow < this.state.maxRows
      ) {
        this.setState({
          playerRow: this.state.playerRow + 1,
          playerDirection: 'down',
          playerMoveCount: this.state.playerMoveCount + 1,
          counter: this.state.counter - 1,
        });
      } else if (event.key === 'ArrowLeft' && this.state.playerColumn > 0) {
        this.setState({
          playerColumn: this.state.playerColumn - 1,
          playerDirection: 'left',
          playerMoveCount: this.state.playerMoveCount + 1,
          counter: this.state.counter - 1,
        });
      } else if (
        event.key === 'ArrowRight' &&
        this.state.playerColumn < this.state.maxColumns
      ) {
        this.setState({
          playerColumn: this.state.playerColumn + 1,
          playerDirection: 'right',
          playerMoveCount: this.state.playerMoveCount + 1,
          counter: this.state.counter - 1,
        });
      } else if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        this.setState({ alert: 'playerIllegalMove' });
        this.illegalMoveTimeout = setTimeout(this.resetAlert, 1250);
      }
      this.props.updateGameBoard(this.updatePlayerPositionOnGameBoard());
    }
    if (event.key === '^') {
      this.handleNextLevel();
    }
  };

  checkTurn = () => {
    this.checkGameEnd();
    if (
      this.state.playerMoveCount % 2 === 0 &&
      this.state.alert === '' &&
      this.state.krakenTime === false &&
      this.props.playerTurn === true &&
      this.state.computerMoveCount < this.state.playerMoveCount
    ) {
      this.props.updatePlayerTurn(false);
      this.triggerComputerMove();
    }
  };

  triggerComputerMove = () => {
    this.firstComputerMoveTimeout = setTimeout(
      () => this.handleEnemyMove(),
      750,
    );
    this.checkGameEndTimeout = setTimeout(
      () => this.checkGameEndNoStops(),
      1000,
    );
    this.secondComputerMoveTimeout = setTimeout(() => {
      if (this.state.gameEndConditions === false) {
        this.handleEnemyMove();
      }
    }, 1500);
    this.updatePlayerTurnTimeout = setTimeout(() => {
      if (this.state.gameEndConditions === false) {
        this.props.updatePlayerTurn(true);
      }
    }, 1600);
  };

  filterChallengeQuestions = () => {
    const unaskedQuestions = this.props.allChallengeQuestions.filter(
      challengeQuestion => challengeQuestion.asked === false,
    );

    const checkedQuestions = this.checkFilteredQuestions(unaskedQuestions);

    if (checkedQuestions.length > 0) {
      return checkedQuestions;
    } else {
      const unaskAllQuestions = [];
      this.props.allChallengeQuestions.map(challengeQuestion =>
        unaskAllQuestions.push({ ...challengeQuestion, asked: false }),
      );
      this.props.updateAllChallengeQuestions(unaskAllQuestions);
      return this.checkFilteredQuestions(unaskAllQuestions);
    }
  };

  checkFilteredQuestions = questionList => {
    let filteredQuestions = [];
    switch (this.props.playerLevel) {
      case 1:
        filteredQuestions = questionList.filter(
          unaskedQuestion => unaskedQuestion.difficulty === 'easy',
        );
        break;
      case 2:
        filteredQuestions = questionList.filter(
          unaskedQuestion => unaskedQuestion.difficulty !== 'hard',
        );
        break;
      case 3:
        filteredQuestions = questionList.filter(
          unaskedQuestion => unaskedQuestion.difficulty === 'medium',
        );
        break;
      case 4:
        filteredQuestions = questionList.filter(
          unaskedQuestion => unaskedQuestion.difficulty !== 'easy',
        );
        break;
      default:
        filteredQuestions = questionList.filter(
          unaskedQuestion => unaskedQuestion.difficulty === 'hard',
        );
        break;
    }
    return filteredQuestions;
  };

  shuffleChallengeQuestions = () => {
    const shuffledQuestions = this.filterChallengeQuestions().map(
      question => question,
    );
    for (let i = shuffledQuestions.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [
        shuffledQuestions[j],
        shuffledQuestions[i],
      ];
    }
    this.props.changeChallengeQuestions(shuffledQuestions);
  };

  getKrakenQuestion = () => {
    if (this.props.challengeQuestions.length > 0) {
      return this.props.challengeQuestions[this.state.challengeQuestionNumber];
    } else {
      this.shuffleChallengeQuestions();
    }
  };

  getProgressPercent = () => {
    const percentageTreasures =
      100 -
      (this.state.numberOfTreasureChests /
        (this.state.maxTreasures + this.state.maxKraken)) *
        100;
    this.setState({ progressPercent: percentageTreasures });
  };

  toggleShowGameLog = () => {
    this.setState({ showGameLog: !this.state.showGameLog });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="gameplay-container">
          <div className="game-log-display">
            <Button onClick={this.toggleShowGameLog}>
              {this.state.showGameLog ? 'Hide Game Log' : 'Show Game Log'}
            </Button>
            {this.state.showGameLog && (
              <div className="game-log">
                {this.state.gameLog.map(gameLogItem => (
                  <div>
                    {gameLogItem}
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <DisplayGameBoard
            handleShipMove={this.handleShipMove}
            handleKrakenPlayer={this.handleKrakenPlayer}
            krakenTime={this.state.krakenTime}
            alert={this.state.alert}
            resetAlert={this.resetAlert}
            challengeQuestionNumber={this.state.challengeQuestionNumber}
            resetAlertAndCheckTurn={this.resetAlertAndCheckTurn}
            handleSameLevel={this.handleSameLevel}
            handleNextLevel={this.handleNextLevel}
            gameEndConditions={this.state.gameEndConditions}
          />
          <HowToPlay easterEgg={this.props.easterEgg} />
        </div>
        <div>
          <Progress percent={this.state.progressPercent} indicating />
          <div className="additional-game-components-display">
            <MovesRemaining
              computerMoveCount={this.state.computerMoveCount}
              playerMoveCount={this.state.playerMoveCount}
              playerTurn={this.props.playerTurn}
              playerLevel={this.props.playerLevel}
            />
            <ScoreBoard />
            <Button
              primary
              onClick={this.openAddQuestion}
              className="question-button"
            >
              Add a Question
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerTurn: state.playerTurn,
    gameBoard: state.gameBoard,
    playerScore: state.playerScore,
    playerLives: state.playerLives,
    computerScore: state.computerScore,
    computerLives: state.computerLives,
    screen: state.screen,
    playerLevel: state.playerLevel,
    challengeQuestions: state.challengeQuestions,
    allChallengeQuestions: state.allChallengeQuestions,
    characterImage: state.characterImage,
    easterEgg: state.easterEgg,
  };
};

const mapDispatchToProps = {
  updatePlayerTurn,
  updateGameBoard,
  changePlayerScore,
  changeComputerScore,
  changeScreen,
  increasePlayerLevel,
  resetScores,
  decreaseComputerLives,
  decreasePlayerLives,
  resetLives,
  changeChallengeQuestions,
  updateAllChallengeQuestions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameBoard);
