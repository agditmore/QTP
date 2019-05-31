import React from 'react';
import Play from './Images/Play.png';

const AllSongsRow = (props) => {
    return(
        <div className="all-songs-song-container">
            <button onClick={() => props.addToPlaylist(props.song)}>+</button>
            <button onClick={() => props.playSong(props.song)}><img src={Play} alt="Play" className="arrow" /></button>
            <div className="all-songs-column">
                {props.song.title}
            </div>
            <div className="all-songs-column">
                {props.song.artist}
            </div>
            <div className="all-songs-column">
                {props.song.year}
            </div>
        </div>
    )
   
}

export default AllSongsRow;