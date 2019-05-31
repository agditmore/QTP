import React from 'react';

const SortingButtons = (props) => {
    
    return(
        <div className="sorting-buttons-container">
            <button onClick={() => props.orderAllSongsList(props.compareTitleAZ)}>Sort By Title A-Z</button>
            <button onClick={() => props.orderAllSongsList(props.compareTitleZA)}>Sort By Title Z-A</button>
            <button onClick={() => props.orderAllSongsList(props.compareArtistAZ)}>Sort By Artist A-Z</button>
            <button onClick={() => props.orderAllSongsList(props.compareArtistZA)}>Sort By Artist Z-A</button>
            <button onClick={() => props.orderAllSongsList(props.compareYearAscending)}>Sort By Year Ascending</button>
            <button onClick={() => props.orderAllSongsList(props.compareYearDescending)}>Sort By Year Descending</button>
        </div>
    )
}   

export default SortingButtons;