import React from 'react';
import PlayBar from './Components/PlayBar';
import PlaylistArea from './Components/PlaylistArea';
import AllSongsArea from './Components/AllSongsArea';
import './App.css';
import { connect } from 'react-redux';
import { setPlaylist, setCurrentSong } from './redux/actions';

class App extends React.Component {

  removeFromPlaylist = (removedSong) => {
    const newPlaylist = this.state.playlist.filter((song) => song.title !== removedSong.title)
    this.updatePlaylist(newPlaylist)
  }

  playSong = (song) => {
    this.props.setCurrentSong(song)
  }

  updatePlaylist = (newPlaylist) => {
    this.props.setPlaylist(newPlaylist)
  }

  addToPlaylist = (addedSong) => {
    if (this.props.playlist.includes(addedSong)){
      return
    }
    this.props.setPlaylist([...this.props.playlist, addedSong])
  }

  render() {
    return (
      <div>
        <PlayBar
          playSong={this.playSong}
        />
        <PlaylistArea
          removeFromPlaylist={this.removeFromPlaylist}
          playSong={this.playSong}
          updatePlaylist={this.updatePlaylist}
        />
        <AllSongsArea 
          playSong={this.playSong}
          updatePlaylist={this.updatePlaylist}
          addToPlaylist={this.addToPlaylist}
        />
      </div>
    );
    }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.playlist,
    currentSong: state.currentSong
  }
}

const mapDispatchToProps = {
  setPlaylist,
  setCurrentSong
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
