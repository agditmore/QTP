import React from 'react';
import PirateShip from './../images/Ships/PirateShip.png';
import Whirlpool from './../images/Whirlpool.jpg';
import TreasureChest from './../images/TreasureChest.jpg';
import Dragon from './../images/Dragon.png';
import Feather from './../images/Feather.jpeg';
import Tornado from './../images/Tornado.jpg';

const GameCard = (props) => {
    switch (props.gameSquare.contains) {
        case "sea":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                </div>);
        case "playerShip":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={props.characterImage} alt="Player's Ship" className="game-img" />
                </div>);
        case "computerShip":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={props.easterEgg ? Dragon : PirateShip} alt="Computers Ship" className="game-img" />
                </div>);
        case "treasureChestTreasure":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={props.easterEgg ? Feather : TreasureChest} alt="Treasure Chest" className="game-img" />
                </div>);
        case "treasureChestKraken":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={props.easterEgg ? Feather : TreasureChest} alt="Treasure Chest" className="game-img" />
                </div>);
        case "whirlpool":
            return (
                <div className="gameboard-block" id={props.gameSquare.id}>
                    <img src={props.easterEgg ? Tornado: Whirlpool} alt="Whirlpool" className="game-img" />
                </div>);
        default:
            return (<div></div>);
    }
}

export default GameCard;