import React from 'react';
import CommentInput from './CommentInput';

const CommentDisplay = (props) => {
    return(<div>
        {props.postItem.commentLog.map((commentItem) => {
            return(
                <div key={commentItem.comment}>
                {commentItem.name}: {commentItem.comment}
                </div>
            )
        })}
        <CommentInput
            onKeyDown={props.onKeyDown}
            onChange={props.onChange}
            postItem={props.postItem}
        />
        </div>
    )
}

export default CommentDisplay;