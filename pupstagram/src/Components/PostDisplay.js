import React from 'react';
import CommentDisplay from './CommentDisplay';
import ShowOrHideCommentsButton from './ShowOrHideCommentsButton';
import LikeButton from './LikeButton';
import LeftArrowButton from './LeftArrowButton';
import RightArrowButton from './RightArrowButton';

const PostDisplay = (props) => {
    return (props.posts.map((postItem) => {
        return(
            <div key={postItem.id}>
            <div className="arrows-and-image-container">
                <div className="column">
                <LeftArrowButton
                    postItem={postItem}
                    onLeftArrowButtonClick={props.onLeftArrowButtonClick}
                />
                </div>
                <div className="column">
                    <img 
                        src={postItem.images[postItem.displayedImageIndex].image} 
                        alt={postItem.images[0].alt} 
                        onDoubleClick={(event) => props.onDoubleClick(event, postItem)}
                        className="image-container">
                    </img>
                </div>
                <div className="column">
                <RightArrowButton
                    postItem={postItem}
                    onRightArrowButtonClick={props.onRightArrowButtonClick}
                />
                </div>
            </div>
                <br />
                <div>
                <p>{postItem.caption}</p>
                    <div id="wags-and-comments">
                    <div id="wag-container" className="like-container">
                        <LikeButton 
                            postItem={postItem}
                            onClick={props.onLikeClick}
                        />
                        <p padding-right="3px">{postItem.numberOfLikes} wags</p>
                    </div>
                    <div id="comment-container" className="column">
                    <div>
                        <ShowOrHideCommentsButton 
                            postItem={postItem}
                            onClick={props.onCommentClick}
                        />
                    </div>
                    <div>
                        {postItem.showComments ? 
                        <CommentDisplay 
                            postItem={postItem} 
                            onKeyDown={props.onKeyDown}
                            onChange={props.onChange}
                        /> : null
                        }
                    </div>
                    </div>
                    </div>
                    <br />
                </div>
                <hr />
                <br />
            </div>
        )
    }))
}

export default PostDisplay;