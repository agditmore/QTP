import React from 'react';
import Arrow from './Images/Arrow.png';
import Play from './Images/Play.png';

const PlaylistSongRow = (props) => {
    return (
        <div className={ props.song.title === props.currentSong.title ? "highlighted-song-div": "all-songs-song-container"}>
            <button onClick={() => props.playSong(props.song)}><img src={Play} alt="Play" className="arrow" /></button>
            <div className="all-songs-column">
                {props.song.title}
            </div>
            <div className="all-songs-column">
                {props.song.artist}
            </div>
            <button onClick={() => props.moveSongInPlaylist(props.song, "up")}><img src={Arrow} className="rotated-arrow" alt="up arrow" /></button>
            <button onClick={() => props.moveSongInPlaylist(props.song, "down")}><img src={Arrow} className="arrow" alt="down arrow" /></button>
            <button onClick={() => props.removeFromPlaylist(props.song)}>-</button>
        </div>
    )
    
}

export default PlaylistSongRow;