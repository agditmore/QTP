import React from 'react';
import CommentDisplay from './CommentDisplay';
import ShowOrHideCommentsButton from './ShowOrHideCommentsButton';
import LikeButton from './LikeButton';
import LeftArrowButton from './LeftArrowButton';
import RightArrowButton from './RightArrowButton';
import Wag from './Images/Wag.png'

const PostDisplay = (props) => {
    return (props.posts.map((postItem) => {
        return(
            <div key={postItem.id}>
                <div className="image-info-bar">
                    <div className="poster">
                        {postItem.poster}
                    </div>
                    <div className="location">
                        {postItem.location}
                    </div>
                </div>
            <div className="arrows-and-image-container">
                <div>
                <LeftArrowButton
                    postItem={postItem}
                    onLeftArrowButtonClick={props.onLeftArrowButtonClick}
                />
                </div>
                <div>
                    <div className="main-image-div">
                        <img 
                            src={postItem.images[postItem.displayedImageIndex].image} 
                            alt={postItem.images[0].alt} 
                            onDoubleClick={(event) => props.onDoubleClick(event, postItem)}
                            className="image-container">
                        </img>
                        {postItem.showWagImage === true 
                            ?  <img src={Wag} alt="wag" className="wag-image" /> 
                            : null
                        }
                    </div>
                    
                </div>
                <div>
                <RightArrowButton
                    postItem={postItem}
                    onRightArrowButtonClick={props.onRightArrowButtonClick}
                />
                </div>
            </div>
                <div>
                <div className="caption-container"><p>{postItem.caption}</p></div>
                    <div id="wags-and-comments">
                    <div id="wag-container" className="like-container">
                        <LikeButton 
                            postItem={postItem}
                            onClick={props.onLikeClick}
                        />
                        <p padding-right="3px">{postItem.numberOfLikes} wags</p>
                    </div>
                    <div className="comment-container">
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
                            onHideClickForComment={props.onHideClickForComment}
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