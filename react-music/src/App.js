import React from 'react';
import PlayBar from './Components/PlayBar';
import PlaylistArea from './Components/PlaylistArea';
import AllSongsArea from './Components/AllSongsArea';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: [],
      currentSong: {},
    }
  }

  removeFromPlaylist = (removedSong) => {
    const newPlaylist = this.state.playlist.filter((song) => song.title !== removedSong.title)
    this.updatePlaylist(newPlaylist)
  }

  playSong = (song) => {
    this.setState({
      currentSong: song
    })
  }

  updatePlaylist = (newPlaylist) => {
    this.setState({
      playlist: newPlaylist
    })
  }

  addToPlaylist = (addedSong) => {
    if (this.state.playlist.includes(addedSong)){
      return
    }
    this.setState({
      playlist: [...this.state.playlist, addedSong]
    })
  }

  render() {
    return (
      <div>
        <PlayBar
          playSong={this.playSong}
          currentSong={this.state.currentSong}
          playlist={this.state.playlist}
        />
        <PlaylistArea
          playlist={this.state.playlist}
          removeFromPlaylist={this.removeFromPlaylist}
          playSong={this.playSong}
          currentSong={this.state.currentSong}
          updatePlaylist={this.updatePlaylist}
        />
        <AllSongsArea 
          playlist={this.state.playlist}
          playSong={this.playSong}
          updatePlaylist={this.updatePlaylist}
          addToPlaylist={this.addToPlaylist}
        />
      </div>
    );
    }
}

export default App;
