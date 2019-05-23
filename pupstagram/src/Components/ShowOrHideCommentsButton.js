import React from 'react';

const ShowOrHideCommentsButton = (props) => {
    return(
        <div>
            <button onClick={(event) => props.onClick(event, props.postItem)}>
                {props.postItem.showComments ? "Hide Borks" : "Show Borks"}
            </button>
        </div>
    )
}

export default ShowOrHideCommentsButton;