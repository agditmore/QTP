import React from 'react';

const Welcome = (props) => {
    const handleCancelClick = () => {
        alert("Well, best to get yourself back to shore! Farewell!")
    }

    return(
        <div>
            <h1>
                Welcome to Game
            </h1>
            <h2>
                Are you ready to begin your sea voyage?
            </h2>
            <button onClick={() => props.changeScreen("chooseCharacter")}>Aye, matey!</button>
            <button onClick={handleCancelClick}>Yikes! No!</button>
        </div>
    )
}

export default Welcome;