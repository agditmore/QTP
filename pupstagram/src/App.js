import React from 'react';
import './App.css';
import PostDisplay from './Components/PostDisplay';
import NewPostInput from './Components/NewPostInput';
import Header from './Components/Header';

let updatedNumberOfLikes=0;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      urlString: '',
      captionString: '',
      posts: [
        {
          id: 2,
          displayedImageIndex: 0,
          images: [
            {
              id: 1,
              image: 'https://imgur.com/u3Z67xt.png',
              alt: 'WOW BEST DAY EVER picture'
            }
          ],
          caption: 'WOW BEST DAY EVER',
          numberOfLikes: 3,
          likedByMe: true,
          showWagImage: false,
          showComments: true,
          commentString: '',
          commentLog: [
            {id: 1,
            name: 'Tavi',
            comment: 'omg so jelly'},
            {id: 2,
            name: 'Oliver',
            comment: 'Save some for me!!!!!!'},
          ]
        },
        {
          id: 1,
          displayedImageIndex: 0,
          images: [
            {
              id: 1,
              image: 'https://imgur.com/E91ZzL7.png',
              alt: 'The Enemy has been spotted. BE ON ALERT! picture'
            },
            {
              id: 2,
              image: 'https://imgur.com/dIzhvO7.png',
              alt: 'The Enemy has been spotted. BE ON ALERT! picture'
            }
          ],
          caption: 'The Enemy has been spotted. BE ON ALERT!',
          numberOfLikes: 5,
          likedByMe: false,
          showWagImage: false,
          showComments: true,
          commentString: '',
          commentLog: [
            {id: 1,
            name: 'Casper',
            comment: 'Wait what? Is something happening?'},
            {id: 2,
            name: 'Pi',
            comment: 'OMG BORK BORK BORK BORK BORK'},
          ],
        }
      ],
    }
  }

  handleInputChange = (event) => {
    this.setState({
      urlString: event.target.value
    });
  }

  handleCaptionInputChange = (event) => {
    this.setState({
      captionString: event.target.value
    })
  }

  handleCommentInputChange = (event, changedPostItem) => {
      this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          commentString: event.target.value,
        }
        :postItem)
      })
  }

  handleShowOrHideCommentsButtonClick = (event, changedPostItem) => {
    const newArray3 = this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
      {
        ...postItem,
        showComments: !postItem.showComments,
      }
      :postItem)
      this.setState({
        posts: newArray3
      })
  }

  handleLikeButtonClick = (event, changedPostItem) => {
    if (changedPostItem.likedByMe === true) {
      updatedNumberOfLikes = changedPostItem.numberOfLikes - 1;
    }
    else {
      updatedNumberOfLikes = changedPostItem.numberOfLikes + 1;
    }
      this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          numberOfLikes: updatedNumberOfLikes,
          likedByMe: !postItem.likedByMe,
        }
        :postItem)
      })
  }

  handleDoubleClick = (event, changedPostItem) => {
    this.handleLikeButtonClick(event, changedPostItem);
    if (changedPostItem.likedByMe === true) {
      this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          showWagImage: true
        }
        :postItem)
      })
      setTimeout(() => this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          showWagImage: false
        }
        :postItem)
      }), 2000)
    }
    
  }

  handleRightArrowButtonClick = (event, changedPostItem) => {
    let newDisplayedImageIndex = changedPostItem.displayedImageIndex < changedPostItem.images.length-1 ? changedPostItem.displayedImageIndex+1 : changedPostItem.displayedImageIndex
    this.setState({
      posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ?
      {
        ...postItem,
        displayedImageIndex: newDisplayedImageIndex
      }
      :postItem)
    })
  }

  handleLeftArrowButtonClick = (event, changedPostItem) => {
    let newDisplayedImageIndex = changedPostItem.displayedImageIndex > 0 ? changedPostItem.displayedImageIndex-1 : changedPostItem.displayedImageIndex
    this.setState({
      posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ?
      {
        ...postItem,
        displayedImageIndex: newDisplayedImageIndex
      }
      :postItem)
    })
  }

  handleEnterPress = (event, urlString, captionString) => {
    const urlArray = urlString.split(",")

    const imageArray = urlArray.map(url => {
      return {id: urlArray.indexOf(url)+1, image: url.trim(), alt: captionString + ' picture'}
    })

    if (event.key === "Enter"){
      let newObject = {
        id: this.state.posts.length+1,
        displayedImageIndex: 0,
        images: imageArray,
        caption: captionString,
        numberOfLikes: 0,
        likedByMe: false,
        showWagImage: false,
        showComments: false,
        commentString: '',
        commentLog: [],
      }
      this.setState({
        posts: [
          newObject,
          ...this.state.posts
        ],
        urlString: '',
        captionString: ''
      })
    }
  }

  handleEnterPressForComment = (event, changedPostItem) => {
    if (event.key === "Enter"){
      let newComment = {
        id: this.state.posts.length+1,
        name: "me",
        comment: changedPostItem.commentString,
      }
      this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          commentString: '',
          commentLog: [...postItem.commentLog,
            newComment
          ],
        }
        :postItem),
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.state.coolMessage}</div>
        <NewPostInput 
          onKeyDown={this.handleEnterPress}
          urlString={this.state.urlString}
          onChange={this.handleInputChange}
          captionString={this.state.captionString}
          onCaptionKeyDown={this.handleEnterPress}
          onCaptionChange={this.handleCaptionInputChange}
        />
        <br />
        <hr />
        <br />
        <PostDisplay 
          posts={this.state.posts}
          onKeyDown={this.handleEnterPressForComment}
          onChange={this.handleCommentInputChange}
          onCommentClick={this.handleShowOrHideCommentsButtonClick}
          onLikeClick={this.handleLikeButtonClick}
          onRightArrowButtonClick={this.handleRightArrowButtonClick}
          onLeftArrowButtonClick={this.handleLeftArrowButtonClick}
          onDoubleClick={this.handleDoubleClick}
        />
      </div>
    )
  }
}

export default App;
