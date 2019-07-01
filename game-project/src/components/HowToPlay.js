/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const HowToPlay = ({ easterEgg }) => {
  let enemyEncounter = '';
  let randomEvent = '';
  let winPoints = '';
  if (easterEgg) {
    enemyEncounter = 'eagles';
    randomEvent = 'tornadoes';
    winPoints = 'golden feathers';
  } else {
    enemyEncounter = 'Kraken';
    randomEvent = 'whirlpools';
    winPoints = 'treasures';
  }
  return (
    <div className="how-to-play">
      <h4>How To Play:</h4>
      <li>
        It's your turn! Use your arrow keys to move your player (located in the
        bottom left of the board) orthogonally across the board. Both you and
        the enemy will move twice per turn.
      </li>
      <br />
      <li>
        The goal of the game is to acquire more {winPoints} than the enemy while
        surviving the {enemyEncounter}!
      </li>
      <br />
      <li>
        Some of the {winPoints} may look innocent enough, but they are guarded
        by {enemyEncounter} that will come out and quiz your knowledge. Answer
        correctly, and they will let you pass! Otherwise, they will attack your
        player, and you'll be one step closer to sinking!
      </li>
      <br />
      <li>
        Watch out for {randomEvent}! They'll fling you across the board before
        you know it.
      </li>
    </div>
  );
};

export default HowToPlay;
