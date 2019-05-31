import React from 'react';
import PlaylistSongRow from './PlaylistSongRow';

class PlaylistArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPlaylist: true,
        };
    }

    moveSongInPlaylist = (movedSong, direction) => {
        const movedSongOriginalIndex = this.props.playlist.indexOf(movedSong);
        let newPlaylist = this.props.playlist;
        if (direction==="down" && movedSongOriginalIndex < newPlaylist.length-1) {
          const secondSong = this.props.playlist[movedSongOriginalIndex+1];
          newPlaylist[movedSongOriginalIndex] = secondSong;
          newPlaylist[movedSongOriginalIndex+1] = movedSong;
        }
        else if (direction==="up" && movedSongOriginalIndex > 0) {
          const secondSong = this.props.playlist[movedSongOriginalIndex-1];
          newPlaylist[movedSongOriginalIndex] = secondSong;
          newPlaylist[movedSongOriginalIndex-1] = movedSong;
        }
        this.props.updatePlaylist(newPlaylist)
    }

    showOrHidePlaylist = () => {
        this.setState({
            showPlaylist: !this.state.showPlaylist,
        })
    }

    render() 
        {if (this.props.playlist.length>0 && this.state.showPlaylist){
            return(
                <div>
                    <div className="playlist-header">
                        <h2>Playlist</h2>
                        <button className="playlist-button" onClick={this.showOrHidePlaylist}>{this.state.showPlaylist ? "Hide Playlist" : "Show Playlist"}</button>
                    </div>
                    {this.props.playlist.map((song) => 
                        <PlaylistSongRow
                        song={song}
                        playSong={this.props.playSong}
                        removeFromPlaylist={this.props.removeFromPlaylist}
                        currentSong={this.props.currentSong}
                        moveSongInPlaylist={this.moveSongInPlaylist}
                        />
                    )}
                </div>
            )
        }
        else if (this.props.playlist.length>0 && !this.state.showPlaylist){
            return(
                <div className="playlist-header">
                    <h2>Playlist</h2>
                    <button className="playlist-button" onClick={this.showOrHidePlaylist}>{this.state.showPlaylist ? "Hide Playlist" : "Show Playlist"}</button>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default PlaylistArea;