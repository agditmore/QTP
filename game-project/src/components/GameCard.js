import React from 'react';
import PirateShip from './../images/Ships/PirateShip.png';
import Whirlpool from './../images/Whirlpool.jpg';
import TreasureChest from './../images/TreasureChest.jpg';

const GameCard = (props) => {
    switch (props.gameSquare.contains) {
        case "sea":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                </div>);
        case "playerShip":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={props.characterImage} alt="Player's Ship" />
                </div>);
        case "computerShip":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={PirateShip} alt="Computers Ship" />
                </div>);
        case "treasureChestTreasure":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={TreasureChest} alt="Treasure Chest" />
                </div>);
        case "treasureChestKraken":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={TreasureChest} alt="Treasure Chest" />
                </div>);
        case "whirlpool":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={Whirlpool} alt="Whirlpool" />
                </div>);
        default:
            return (<div></div>);
    }
}

export default GameCard;