import React from 'react';
import CommentInput from './CommentInput';

const CommentDisplay = (props) => {
    return(<div>
        {props.postItem.commentLog.map((commentItem, idx) => {
            return commentItem.hide === false ? 
                <div key={idx} className="comment-box">
                <div className="commenter-name">{commentItem.name}</div>
                <div className="comment">{commentItem.comment}</div>
                <div><button className="delete-comment-button" onClick={(event) => props.onHideClickForComment(event, props.postItem.id, commentItem.id)}>X</button></div>
                </div>
                : null
        })
        }
        <CommentInput
            onKeyDown={props.onKeyDown}
            onChange={props.onChange}
            postItem={props.postItem}
        />
        </div>
    )
}

export default CommentDisplay;