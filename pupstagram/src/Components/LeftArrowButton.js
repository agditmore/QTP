import React from 'react';
import LeftArrow from './Images/LeftArrow.png';

const LeftArrowButton = (props) => {
    return(
        <div>
            <button onClick={(event) => props.onLeftArrowButtonClick(event, props.postItem)} className="left-button">
            <img src={LeftArrow} alt="Left Arrow" className="left-arrow" />
            </button>
        </div>
    )
}

export default LeftArrowButton;