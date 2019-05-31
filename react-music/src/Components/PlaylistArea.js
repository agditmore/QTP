import React from 'react';
import PlaylistSongRow from './PlaylistSongRow';

const PlaylistArea = (props) => {
    const moveSongInPlaylist = (movedSong, direction) => {
        const movedSongOriginalIndex = props.playlist.indexOf(movedSong);
        let newPlaylist = props.playlist;
        if (direction==="down" && movedSongOriginalIndex < newPlaylist.length-1) {
          const secondSong = props.playlist[movedSongOriginalIndex+1];
          newPlaylist[movedSongOriginalIndex] = secondSong;
          newPlaylist[movedSongOriginalIndex+1] = movedSong;
        }
        else if (direction==="up" && movedSongOriginalIndex > 0) {
          const secondSong = props.playlist[movedSongOriginalIndex-1];
          newPlaylist[movedSongOriginalIndex] = secondSong;
          newPlaylist[movedSongOriginalIndex-1] = movedSong;
        }
        props.updatePlaylist(newPlaylist)
    }

    if (props.playlist.length>0){
        return(
            <div>
                <h2>Playlist</h2>
                {props.playlist.map((song) => 
                    <PlaylistSongRow
                    song={song}
                    playSong={props.playSong}
                    removeFromPlaylist={props.removeFromPlaylist}
                    currentSong={props.currentSong}
                    moveSongInPlaylist={moveSongInPlaylist}
                    />
                )}
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
}

export default PlaylistArea;