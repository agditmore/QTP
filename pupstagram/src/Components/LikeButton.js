import React from 'react';

const LikeButton = (props) => {
    return(
        <div>
            <button onClick={(event) => props.onClick(event, props.postItem)}>
            {props.postItem.likedByMe ? "Growl" : "Wag"}
            </button>
        </div>
    )
}

export default LikeButton;