import React from 'react';
import LeftArrow from './Images/LeftArrow.png'

const RightArrowButton = (props) => {
    return(
        <div>
            <button onClick={(event) => props.onRightArrowButtonClick(event, props.postItem)} className="right-button">
            <img src={LeftArrow} alt="Right Arrow" className="right-arrow" />
            </button>
        </div>
    )
}

export default RightArrowButton;