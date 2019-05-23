import React from 'react';
import Heads from './Images/Heads.jpg';
import Tails from './Images/Tails.jpg';

const HeadsOrTails = (props) => {
    return (
        <div>
            <h1>Heads or Tails?</h1>
            <div id="ht-container">
                <img src={Heads} alt="Heads" onClick={() => props.onClick("heads", "HT")}></img>
                <img src={Tails} alt="Tails" onClick={() => props.onClick("tails", "HT")}></img>
            </div>
            <div style={{display: props.hasClickedHT ? "block" : "none"}} id="result-container">
                {props.resultHT==='win' ? <h2>You won!</h2>:<h2>You lost!</h2>}
            </div>
        </div>
    )
}

export default HeadsOrTails;