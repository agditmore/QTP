import React from 'react';

const FavSongs = (props) => {
    return (
        <div id="fav-songs">
            <h1>Rocking out to: </h1>
            {
                props.music.map(music => 
                    <div id="song-li">
                    <blockquote id="song" className="creation"><p>{music.song}</p></blockquote>
                    <cite id="artist" className="creator">by {music.artist}</cite></div>)
            }
        
        </div>
    )
};

export default FavSongs;