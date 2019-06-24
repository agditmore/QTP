/* eslint-disable array-callback-return */
import React from 'react';
import DisplayGameBoard from './DisplayGameBoard';
import ScoreBoard from './ScoreBoard';
import { connect } from 'react-redux';
import { updatePlayerTurn, updateGameBoard, changePlayerScore, changeComputerScore, changeScreen, increasePlayerLevel, resetScores, decreaseComputerLives, decreasePlayerLives, resetLives, changeChallengeQuestions } from './../redux/actions';


class GameBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerRow: 8,
            playerColumn: 0,
            playerMoveCount: 0,
            playerDirection: "",
            enemyRow: 0,
            enemyColumn: 9,
            enemyDirection: "",
            treasureLocations: [],
            numberOfTreasureChests: 0,
            maxRows: 8,
            maxColumns: 9,
            maxWhirlpools: 5,
            maxTreasures: 5,
            maxKraken: 5,
            alert: "",
            krakenTime: false, 
            challengeQuestionNumber: 0,
            gameEndConditions: false,
            computerMoveCount: 0,
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleShipMove)
        this.generateGameBoard();
        this.shuffleChallengeQuestions();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleShipMove)
        clearTimeout(this.computerWhirlpoolTimeout)
        clearTimeout(this.playerWhirlpoolTimeout)
        clearTimeout(this.playerCollisionTimeout)
        clearTimeout(this.computerCollisionTimeout)
        clearTimeout(this.firstComputerMoveTimeout)
        clearTimeout(this.secondComputerMoveTimeout)
        clearTimeout(this.updatePlayerTurnTimeout)
        clearTimeout(this.treasureTimeout)
        clearTimeout(this.computerTreasureTimeout)
        clearTimeout(this.gameEndTimeout)
        clearTimeout(this.gameEndTimeout2)
        clearTimeout(this.checkGameEndTimeout)
        clearTimeout(this.checkTurnTimeout)
        clearTimeout(this.newGameGenerationTimeout)
    }

    generateGameBoard = () => {
        const newGameBoard = [];
        for (let numberRows=0; numberRows<this.state.maxRows+1; numberRows++){
            let newRow = []
            for (let numberColumns=0; numberColumns<this.state.maxColumns+1; numberColumns++){
                newRow.push({contains: "sea", id: numberRows.toString()+numberColumns.toString()})
            }
            newGameBoard.push(newRow)
        }
        newGameBoard[0][this.state.maxColumns].contains = "computerShip";
        newGameBoard[this.state.maxRows][0].contains = "playerShip";
        this.setState({playerRow: this.state.maxRows, playerColumn: 0, enemyRow: 0, enemyColumn: this.state.maxColumns })
        for (let numberWhirlpools=0; numberWhirlpools<this.state.maxWhirlpools; numberWhirlpools++){
            const [newRow, newColumn] = this.getRandomLocation(newGameBoard);
            newGameBoard[newRow][newColumn].contains = "whirlpool";
        }
        for (let numberTreasures=0; numberTreasures<this.state.maxTreasures; numberTreasures++){
            const [newRow, newColumn] = this.getRandomLocation(newGameBoard);
            newGameBoard[newRow][newColumn].contains = "treasureChestTreasure";
        }
        for (let numberKraken=0; numberKraken<this.state.maxKraken; numberKraken++){
            const [newRow, newColumn] = this.getRandomLocation(newGameBoard);
            newGameBoard[newRow][newColumn].contains = "treasureChestKraken";
        }
        this.props.updateGameBoard(newGameBoard);
    }
    
    getRandomLocation = (gameBoard) => {
        let newRow = Math.floor(Math.random()*(this.state.maxRows+1))
        let newColumn = Math.floor(Math.random()*(this.state.maxColumns+1))
        while (gameBoard[newRow][newColumn].contains !== "sea"){
            newRow = Math.floor(Math.random()*(this.state.maxRows+1));
            newColumn = Math.floor(Math.random()*(this.state.maxColumns+1));
        }
        return [newRow, newColumn];
    }

    handleTreasure = (ship) => {
        if (ship === "playerShip"){
            this.setState({alert: "playerFoundTreasure"})
            this.props.changePlayerScore(1)
        }
        else if (ship === "computerShip"){
            this.props.changeComputerScore(1)
        }
    }

    resetAlertAndCheckTurn = () => {
        this.setState({alert: ""})
        this.checkTurnTimeout = setTimeout(this.checkTurn, 150);
    }

    resetAlert = () => {
        this.setState({alert: ""})
    }

    handleWhirlpool = (ship) => {
        const [newRow, newColumn] = this.getRandomLocation(this.props.gameBoard);
        if (ship === "playerShip"){
            this.setState({ playerRow: newRow, playerColumn: newColumn, alert: "playerFoundWhirlpool" })
            this.playerWhirlpoolTimeout = setTimeout(()=>this.props.updateGameBoard(this.updatePlayerPositionOnGameBoard()), 250)
        }
        else {
            this.setState({ enemyRow: newRow, enemyColumn: newColumn, alert: "computerFoundWhirlpool" })
            this.computerWhirlpoolTimeout = setTimeout(()=>this.props.updateGameBoard(this.updateComputerPositionOnGameBoard()), 250)
        }
    }

    determineCollision = (direction, hitShipLocation, aggressorLocation) => {
        let boundary;
        if (direction === "down"){
            boundary = this.state.maxRows;
        }
        else if (direction === "right"){
            boundary = this.state.maxColumns;
        }
        if (direction === "up" || direction === "left"){
            if (hitShipLocation-3>=0){
                return({hitShipLocation: hitShipLocation-3, aggressorLocation})
            }
            else if (hitShipLocation===0){
                return ({hitShipLocation: 0, aggressorLocation: 1})
            }
            else {
                return({hitShipLocation: 0, aggressorLocation})
            }
        }
        else if (direction === "down" || direction === "right"){
            if (hitShipLocation+3<=boundary){
                return ({hitShipLocation: hitShipLocation+3, aggressorLocation})
            }
            else if (hitShipLocation===boundary){
                return({hitShipLocation: boundary, aggressorLocation: boundary-1})
            }
            else {
                return({hitShipLocation: boundary, aggressorLocation})
            }
        }
    }

    handleCollision = (ship) => {
        let updatedLocations;
        if (ship === "playerShip"){
            if (this.state.playerDirection === "up" || this.state.playerDirection === "down"){
                updatedLocations = this.determineCollision(this.state.playerDirection, this.state.enemyRow, this.state.playerRow)
                this.setState({enemyRow: updatedLocations.hitShipLocation, playerRow: updatedLocations.aggressorLocation})
            }   
            else {
                updatedLocations = this.determineCollision(this.state.playerDirection, this.state.enemyColumn, this.state.playerColumn)
                this.setState({enemyColumn: updatedLocations.hitShipLocation, playerColumn: updatedLocations.aggressorLocation})
            }
            this.playerCollisionTimeout = setTimeout(()=>this.props.updateGameBoard(this.updateComputerPositionOnGameBoard()), 100)
        }
        else if (ship === "computerShip"){
            if (this.state.enemyDirection === "up" || this.state.enemyDirection === "down"){
                updatedLocations = this.determineCollision(this.state.enemyDirection, this.state.playerRow, this.state.enemyRow)
                this.setState({playerRow: updatedLocations.hitShipLocation, enemyRow: updatedLocations.aggressorLocation})
            }
            else{
                updatedLocations = this.determineCollision(this.state.enemyDirection, this.state.playerColumn, this.state.enemyColumn)
                this.setState({playerColumn: updatedLocations.hitShipLocation, enemyColumn: updatedLocations.aggressorLocation})
            }
            this.computerCollisionTimeout = setTimeout(()=>this.props.updateGameBoard(this.updatePlayerPositionOnGameBoard()), 100)
        }
    }

    handleKrakenComputer = () => {
        const oddsOfSuccess = Math.floor(Math.random()*3)+1
        if (oddsOfSuccess % 2 === 1){
            this.setState({alert: "computerKrakenSuccess"})
        }
        else {
            this.props.decreaseComputerLives();
            this.setState({alert: "computerKrakenFailure"})
            this.checkGameEnd();
        }
    }

    handleKrakenPlayer = (response) => {
        this.setState({ krakenTime: false })
        if (response === "correct"){
            this.setState({alert: "playerKrakenSuccess"})
        }
        else if (response === "incorrect"){
            this.props.decreasePlayerLives();
            this.setState({alert: "playerKrakenFailure"})
        }
        if (this.state.challengeQuestionNumber < this.props.challengeQuestions.length-1){
            this.setState({ challengeQuestionNumber: this.state.challengeQuestionNumber+1 })
        }
        else {
            this.shuffleChallengeQuestions();
            this.setState({ challengeQuestionNumber: 0 })
        }
    }

    checkGameEnd = () => {
        if (this.state.alert === ""){
            if (this.state.numberOfTreasureChests === 0 && this.state.playerMoveCount > 0){
                this.setState({alert: "gameEnd", gameEndConditions: true,});
            }
            else if (this.props.computerLives === 0 || this.props.playerLives === 0){
                this.setState({alert: "gameEnd", gameEndConditions: true,});
            }
        } 
    }

    handleSameLevel = () => {
        this.setState({ 
            numberOfTreasureChests: 0, 
            playerMoveCount: 0,
            treasureLocations: [],
            gameEndConditions: false,
            computerMoveCount: 0
        })
        this.props.resetLives({playerLives: 3, computerLives: 3});
        this.props.resetScores();
        this.generateGameBoard();
        this.props.updatePlayerTurn(true);
        this.resetAlert();
    }

    handleNextLevel = () => {
        this.props.increasePlayerLevel();
        let oddTreasureTest = Math.ceil(this.state.maxTreasures*1.2);
        if (oddTreasureTest % 2 === 0){
            oddTreasureTest = oddTreasureTest+1;
        }
        this.setState({ 
            maxRows: Math.ceil(this.state.maxRows*1.5),
            maxColumns: Math.ceil(this.state.maxColumns*1.5),
            maxWhirlpools: Math.ceil(this.state.maxWhirlpools*1.5),
            maxTreasures: oddTreasureTest,
            maxKraken: Math.ceil(this.state.maxKraken*1.5),
            numberOfTreasureChests: 0, 
            playerMoveCount: 0,
            treasureLocations: [],
            gameEndConditions: false,
            computerMoveCount: 0
        })
        this.props.resetScores();
        this.newGameGenerationTimeout = setTimeout(this.generateGameBoard, 200);
        this.props.updatePlayerTurn(true);
        this.props.resetLives({playerLives: 3, computerLives: 3});
        this.resetAlert();
    }

    updatePlayerPositionOnGameBoard = () => {
        const updatedGameBoard = [];
        let updatedGameRow = [];
        const ship = "playerShip";

        if (this.state.playerRow === this.state.enemyRow && this.state.playerColumn === this.state.enemyColumn){
            this.handleCollision("playerShip")
        }
        this.props.gameBoard.map((gameRow) => 
            {(gameRow.map((gameCard) => 
                {if (this.state.playerRow === this.props.gameBoard.indexOf(gameRow) && this.state.playerColumn === gameRow.indexOf(gameCard)){
                    switch (gameCard.contains) {
                        case "sea":
                            updatedGameRow.push({...gameCard, contains: ship});
                            break;
                        case "treasureChestTreasure":
                            updatedGameRow.push({...gameCard, contains: ship});
                            this.handleTreasure(ship);
                            this.setState({numberOfTreasureChests: this.state.numberOfTreasureChests-1});
                            break;
                        case "treasureChestKraken":
                            updatedGameRow.push({...gameCard, contains: ship});
                            this.setState({numberOfTreasureChests: this.state.numberOfTreasureChests-1, krakenTime: true})
                            break;
                        case "whirlpool":
                            updatedGameRow.push({...gameCard, contains: "sea"});
                            this.handleWhirlpool(ship);
                            break;
                        case "computerShip":
                            updatedGameRow.push({...gameCard, contains: ship});
                            break;
                        default:
                            updatedGameRow.push(gameCard);
                            break;
                        }
                } else if (gameCard.contains === ship){
                    updatedGameRow.push({...gameCard, contains: "sea"})
                } else {updatedGameRow.push(gameCard)}}
                )
            )
            updatedGameBoard.push(updatedGameRow)
            updatedGameRow = [];}
        )
        this.gameEndTimeout2 = setTimeout(this.checkGameEnd, 500)
        this.checkTurn();
        return updatedGameBoard;
    }

    updateComputerPositionOnGameBoard = () => {
        const updatedGameBoard = [];
        let updatedGameRow = [];
        const ship = "computerShip";

        if (this.state.playerRow === this.state.enemyRow && this.state.playerColumn === this.state.enemyColumn){
            this.handleCollision(ship)
        }
        this.props.gameBoard.map((gameRow) => 
            {(gameRow.map((gameCard) => 
                {if (this.state.enemyRow === this.props.gameBoard.indexOf(gameRow) && this.state.enemyColumn === gameRow.indexOf(gameCard)){
                    switch (gameCard.contains) {
                        case "sea":
                            updatedGameRow.push({...gameCard, contains: ship});
                            break;
                        case "treasureChestTreasure":
                            updatedGameRow.push({...gameCard, contains: ship});
                            this.computerTreasureTimeout = setTimeout(()=>this.handleTreasure(ship), 150);
                            this.setState({numberOfTreasureChests: this.state.numberOfTreasureChests-1});
                            break;
                        case "treasureChestKraken":
                            this.handleKrakenComputer();
                            updatedGameRow.push({...gameCard, contains: ship});
                            this.setState({numberOfTreasureChests: this.state.numberOfTreasureChests-1});
                            break;
                        case "whirlpool":
                            updatedGameRow.push({...gameCard, contains: "sea"});
                            this.handleWhirlpool(ship);
                            break;
                        case "playerShip":
                            updatedGameRow.push({...gameCard, contains: ship});
                            break;
                        default:
                            updatedGameRow.push(gameCard);
                            break;
                        }
                } else if (gameCard.contains === ship){
                    updatedGameRow.push({...gameCard, contains: "sea"})
                } else {updatedGameRow.push(gameCard)}}
                )
            )
            updatedGameBoard.push(updatedGameRow)
            updatedGameRow = [];
            }
        )
        this.gameEndTimeout = setTimeout(this.checkGameEnd, 500)
        return updatedGameBoard;
    }

    getTreasureLocations = () => {
        const updatedTreasureLocations = [];
        this.props.gameBoard.map((gameRow) =>
            gameRow.map((gameCard) =>
                {if (gameCard.contains === "treasureChestTreasure" || gameCard.contains === "treasureChestKraken"){
                    updatedTreasureLocations.push({
                        row: this.props.gameBoard.indexOf(gameRow),
                        column: gameRow.indexOf(gameCard)
                    })
                }}
            )
        )
        this.setState({
            treasureLocations: updatedTreasureLocations,
            numberOfTreasureChests: updatedTreasureLocations.length,
        })
    }

    handleEnemyMove = () => {
        this.checkGameEnd();
        this.getTreasureLocations();
        const treasureDistance = [];
        this.state.treasureLocations.map((location) => 
            treasureDistance.push(Math.abs(location.row-this.state.enemyRow) + Math.abs(location.column-this.state.enemyColumn))
        )
        const minDistance = Math.min(...treasureDistance);
        const closestTreasureLocation = this.state.treasureLocations[treasureDistance.indexOf(minDistance)]
        closestTreasureLocation.row === this.state.enemyRow ?
            closestTreasureLocation.column > this.state.enemyColumn ?
                this.setState({ enemyColumn: this.state.enemyColumn+1, enemyDirection: "right", computerMoveCount: this.state.computerMoveCount+1})
                : this.setState({enemyColumn: this.state.enemyColumn-1, enemyDirection: "left", computerMoveCount: this.state.computerMoveCount+1})
            : closestTreasureLocation.row > this.state.enemyRow ?
                this.setState({enemyRow: this.state.enemyRow+1, enemyDirection: "down", computerMoveCount: this.state.computerMoveCount+1})
                : this.setState({enemyRow: this.state.enemyRow-1, enemyDirection: "up", computerMoveCount: this.state.computerMoveCount+1})
        this.props.updateGameBoard(this.updateComputerPositionOnGameBoard())
    }

    handleShipMove = (event) => {
        this.getTreasureLocations();
        this.checkGameEnd();
        if (this.props.playerTurn === true && this.state.alert===""){
           if (event.key === "ArrowUp" && this.state.playerRow > 0){
                this.setState({
                    playerRow: this.state.playerRow-1,
                    playerDirection: "up",
                    playerMoveCount: this.state.playerMoveCount+1
                })
            }
            else if (event.key === "ArrowDown" && this.state.playerRow < this.state.maxRows){
                this.setState({
                    playerRow: this.state.playerRow+1,
                    playerDirection: "down",
                    playerMoveCount: this.state.playerMoveCount+1
                })
            }
            else if (event.key === "ArrowLeft" && this.state.playerColumn > 0){
                this.setState({
                    playerColumn: this.state.playerColumn-1,
                    playerDirection: "left",
                    playerMoveCount: this.state.playerMoveCount+1
                })
            }
            else if (event.key === "ArrowRight" && this.state.playerColumn < this.state.maxColumns){
                this.setState({
                    playerColumn: this.state.playerColumn+1,
                    playerDirection: "right",
                    playerMoveCount: this.state.playerMoveCount+1
                }) 
            }
            else if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight"){
                this.setState({ alert: "playerIllegalMove"})
            }
            this.props.updateGameBoard(this.updatePlayerPositionOnGameBoard())
        }
    }

    checkTurn = () => {
        this.checkGameEnd();
        if ((this.state.playerMoveCount % 2 === 0) && this.state.alert === "" && this.state.krakenTime === false && this.props.playerTurn===true && this.state.computerMoveCount<this.state.playerMoveCount) {
            this.props.updatePlayerTurn(false);
            this.triggerComputerMove();
        }
    }

    triggerComputerMove = () => {
        this.firstComputerMoveTimeout = setTimeout(()=>this.handleEnemyMove(), 500)
        this.checkGameEndTimeout = setTimeout(()=> this.checkGameEnd(), 800)
        this.secondComputerMoveTimeout = setTimeout(()=>{if (this.state.gameEndConditions===false){this.handleEnemyMove()}}, 1000)
        this.updatePlayerTurnTimeout = setTimeout(()=>{if (this.state.gameEndConditions===false){this.props.updatePlayerTurn(true)}}, 1000)
    }

    shuffleChallengeQuestions = () => {
        const shuffledQuestions = this.props.challengeQuestions.map((question) => question);
        for (let i = shuffledQuestions.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]]
        }
        changeChallengeQuestions(shuffledQuestions);
    }

    render(){
        return(
            <div>
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
                    callModalPause={this.callModalPause}
                    cancelModalPause={this.cancelModalPause}
                    playerLevel={this.props.playerLevel}
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
        playerScore: state.playerScore,
        playerLives: state.playerLives,
        computerScore: state.computerScore,
        computerLives: state.computerLives,
        screen: state.screen,
        playerLevel: state.playerLevel,
        challengeQuestions: state.challengeQuestions,
        characterImage: state.characterImage,
    }
}

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
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);