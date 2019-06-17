import React from 'react';
import PlaylistSongRow from './PlaylistSongRow';
import { connect } from 'react-redux';
import { toggleShowPlaylistFlag, setPlaylist } from './../redux/actions';

class PlaylistArea extends React.Component {
    moveSongInPlaylist = (movedSong, direction) => {
        const movedSongOriginalIndex = this.props.playlist.indexOf(movedSong);
        let newPlaylist = [];
        this.props.playlist.map((song) => newPlaylist.push(song));
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
        this.props.setPlaylist(newPlaylist)
    }

    showOrHidePlaylist = () => {
        this.props.toggleShowPlaylistFlag(this.props.showPlaylist)
    }

    render() {
        return(this.props.playlist.length>0 && this.props.showPlaylist ? (
                <div>
                    <div className="playlist-header">
                        <h2>Playlist</h2>
                        <button className="playlist-button" onClick={this.showOrHidePlaylist}>{this.props.showPlaylist ? "Hide Playlist" : "Show Playlist"}</button>
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
        : this.props.playlist.length>0 && !this.props.showPlaylist ? (
            <div className="playlist-header">
                <h2>Playlist</h2>
                <button className="playlist-button" onClick={this.showOrHidePlaylist}>{this.props.showPlaylist ? "Hide Playlist" : "Show Playlist"}</button>
            </div>
        )
        : 
        (<div></div>)
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showPlaylist: state.showPlaylist,
        playlist: state.playlist,
        currentSong: state.currentSong
    }
}

const mapDispatchToProps = {
    toggleShowPlaylistFlag,
    setPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistArea);