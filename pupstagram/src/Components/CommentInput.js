import React from 'react';

const CommentInput = (props) => {
    const changedPostItem = props.postItem;
return(
    <div>
        <input 
        className="comment-text-box"
        type="text" 
        placeholder="Bork here..."
        value={props.postItem.commentString}
        onKeyDown={(event) => {props.onKeyDown(event, changedPostItem)}}
        onChange={(event) => props.onChange(event, changedPostItem)}
        />
    </div>
)
}

export default CommentInput;