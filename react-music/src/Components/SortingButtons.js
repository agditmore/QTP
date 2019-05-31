import React from 'react';

const SortingButtons = (props) => {
    return(
        <div className="sorting-buttons-container">
            <button onClick={() => props.orderAllSongsList(this.compareTitleAZ)}>Sort By Title A-Z</button>
            <button onClick={() => props.orderAllSongsList(this.compareTitleZA)}>Sort By Title Z-A</button>
            <button onClick={() => props.orderAllSongsList(this.compareArtistAZ)}>Sort By Artist A-Z</button>
            <button onClick={() => props.orderAllSongsList(this.compareArtistZA)}>Sort By Artist Z-A</button>
            <button onClick={() => props.orderAllSongsList(this.compareYearAscending)}>Sort By Year Ascending</button>
            <button onClick={() => props.orderAllSongsList(this.compareYearDescending)}>Sort By Year Descending</button>
        </div>
    )
}   

export default SortingButtons;