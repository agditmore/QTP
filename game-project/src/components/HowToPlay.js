import React from 'react';

const HowToPlay = () => {
    return(
        <div className="how-to-play">
            <h4>
                How To Play:
            </h4>
            <li>
                It's your turn! Use your arrow keys to move your ship (located in the bottom right of the board) orthogonally across the board.
            </li>
            <br />
            <li>
                The goal of the game is to acquire more treasure than the enemy ship while surviving the kraken! 
            </li>
            <br />
            <li>
                Some of the treasure chests may look innocent enough, but inside lie KRAKEN that will come out and quiz your knowledge of the ocean. Answer correctly, and they will let you pass! Otherwise, they will wreck your ship, and you'll be one step closer to sinking!
            </li>
            <br />
            <li>
                Watch out for Whirlpools! They'll fling you across the ocean before you know it.
            </li>
        </div>
    )
}

export default HowToPlay;