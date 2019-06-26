/* eslint-disable react/prop-types */
import React from 'react';
import PirateShip from '../images/Ships/PirateShip.png';
import Whirlpool from '../images/Whirlpool.jpg';
import TreasureChest from '../images/TreasureChest.jpg';
import Dragon from '../images/Dragon.png';
import Feather from '../images/Feather.jpeg';
import Tornado from '../images/Tornado.jpg';

const GameCard = ({ gameSquare, characterImage, easterEgg }) => {
  switch (gameSquare.contains) {
    case 'sea':
      return <div className="gameboard-block" id={gameSquare.id} />;
    case 'playerShip':
      return (
        <div className="gameboard-block" id={gameSquare.id}>
          <img src={characterImage} alt="Player's Ship" className="game-img" />
        </div>
      );
    case 'computerShip':
      return (
        <div className="gameboard-block" id={gameSquare.id}>
          <img
            src={easterEgg ? Dragon : PirateShip}
            alt="Computers Ship"
            className="game-img"
          />
        </div>
      );
    case 'treasureChestTreasure':
      return (
        <div className="gameboard-block" id={gameSquare.id}>
          <img
            src={easterEgg ? Feather : TreasureChest}
            alt="Treasure Chest"
            className="game-img"
          />
        </div>
      );
    case 'treasureChestKraken':
      return (
        <div className="gameboard-block" id={gameSquare.id}>
          <img
            src={easterEgg ? Feather : TreasureChest}
            alt="Treasure Chest"
            className="game-img"
          />
        </div>
      );
    case 'whirlpool':
      return (
        <div className="gameboard-block" id={gameSquare.id}>
          <img
            src={easterEgg ? Tornado : Whirlpool}
            alt="Whirlpool"
            className="game-img"
          />
        </div>
      );
    default:
      return <div />;
  }
};

export default GameCard;
