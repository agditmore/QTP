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
          id: 3,
          poster: 'Baguette',
          location: 'Pawshington University in St. Louis',
          displayedImageIndex: 0,
          images: [
            {
              id:1,
              image: 'https://imgur.com/6nWI90H.png',
              alt: 'Feelin cute might delete later picture'
            }
          ],
          caption: 'Feelin cute might delete later',
          numberOfLikes: 4,
          likedByMe: false,
          showWagImage: false,
          commentString: '',
          commentLog: [
            {
              id: 1,
              name: 'Oliver',
              comment: 'lookin good!',
              hide: false
            }
          ]
        },
        {
          id: 2,
          poster: 'Casper',
          location: 'Forest Bark',
          displayedImageIndex: 0,
          images: [
            {
              id: 1,
              image: 'https://imgur.com/4wIXQ5f.png',
              alt: 'WOW BEST DAY EVER picture'
            },
            {
              id: 2,
              image: 'https://imgur.com/QcOTaVP.png',
              alt: 'WOW BEST DAY EVER picture'
            },
            {
              id: 3,
              image: 'https://imgur.com/ksMqZ8L.png',
              alt: 'WOW BEST DAY EVER picture'
            },
            {
              id: 4,
              image: 'https://imgur.com/RmhKwXM.png',
              alt: 'WOW BEST DAY EVER picture'
            },
          ],
          caption: 'WOW BEST DAY EVER',
          numberOfLikes: 3,
          likedByMe: false,
          showWagImage: false,
          showComments: true,
          commentString: '',
          commentLog: [
            {id: 1,
            name: 'Tavi',
            comment: 'omg so jelly',
            hide: false
            },
            {id: 2,
            name: 'Indy',
            comment: 'Wish I were there!',
            hide: false
          },
          ]
        },
        {
          id: 1,
          poster: 'Indy',
          location: 'Southhound City',
          displayedImageIndex: 0,
          images: [
            {
              id: 1,
              image: 'https://imgur.com/dFEJIyt.png',
              alt: 'The Enemy has been spotted. BE ON ALERT! picture'
            },
            {
              id: 2,
              image: 'https://imgur.com/ErnQIxy.png',
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
            comment: 'Wait what? Is something happening?',
            hide: false
          },
            {id: 2,
            name: 'Pi',
            comment: 'OMG BORK BORK BORK BORK BORK',
            hide: false
          },
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
      this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          showComments: !postItem.showComments,
        }
        :postItem)
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
    if (changedPostItem.likedByMe === false) {
      updatedNumberOfLikes = changedPostItem.numberOfLikes + 1;
      this.setState({
        posts: this.state.posts.map((postItem) => postItem.id === changedPostItem.id ? 
        {
          ...postItem,
          numberOfLikes: updatedNumberOfLikes,
          likedByMe: !postItem.likedByMe,
          showWagImage: true,
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
      }), 1000)
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
    if (event.key === "Enter"){
      const urlArray = urlString.split(",")

      const imageArray = urlArray.map(url => {
        return {id: urlArray.indexOf(url)+1, image: url.trim(), alt: captionString + ' picture'}
      })

      let newObject = {
        id: this.state.posts.length+1,
        poster: 'Me',
        location: 'Unipup',
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

  handleHideClickForComment = (event, postId, commentId) => {
    const changedCommentLog = this.state.posts.find((postItem) => 
      postItem.id === postId).commentLog.map((commentItem) => 
        commentItem.id === commentId 
        ? {
            ...commentItem, 
            hide: true
          }
        : commentItem
      );
       
    this.setState({
      posts: this.state.posts.map((postItem) => 
        postItem.id === postId 
        ? {
          ...postItem, 
          commentLog: changedCommentLog 
        }
        : postItem)
    })
  }

  handleEnterPressForComment = (event, changedPostItem) => {
    if (event.key === "Enter"){
      let newComment = {
        id: this.state.posts.length+1,
        name: "me",
        comment: changedPostItem.commentString,
        hide: false
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
        <hr />
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
          onHideClickForComment={this.handleHideClickForComment}
        />
      </div>
    )
  }
}

export default App;
