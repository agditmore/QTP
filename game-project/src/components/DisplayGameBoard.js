import React from 'react';
import Ship from './../images/Ship.jpeg';
import PirateShip from './../images/PirateShip.jpeg';
import ClosedTreasureChest from './../images/ClosedTreasureChest.png';

const DisplayGameBoard = (props) => {
    return(
        <div className="gameboard-blocks-container" onKeyDown={props.handleShipMove} tabIndex="0">
            {props.gameBoard.map((gameRow) => 
                gameRow.map((gameSquare) => 
                    {switch (gameSquare.contains) {
                        case "sea":
                            return (
                                <div className="gameboard-block" id={gameSquare.id}>
                                    sea!
                                </div>);
                        case "playerShip":
                            return (
                                <div className="gameboard-block" id={gameSquare.id}>
                                    <img src={Ship} alt="Player's Ship" />
                                </div>);
                        case "computerShip":
                            return (
                                <div className="gameboard-block" id={gameSquare.id}>
                                    <img src={PirateShip} alt="Computers Ship" />
                                </div>);
                        case "treasureChestTreasure":
                            return (
                                <div className="gameboard-block" id={gameSquare.id}>
                                    <img src={ClosedTreasureChest} alt="Treasure Chest" />
                                </div>);
                        case "treasureChestKraken":
                            return (
                                <div className="gameboard-block" id={gameSquare.id}>
                                    <img src={ClosedTreasureChest} alt="Treasure Chest" />
                                </div>);
                        case "whirlpool":
                            return (
                                <div className="gameboard-block" id={gameSquare.id}>
                                    Whirlpool!
                                </div>);
                        default:
                            return (<div></div>);
                    }}
                )
            )}
        </div>
    )
}

export default DisplayGameBoard;