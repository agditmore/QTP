import React from 'react';

const SearchFields = (props) => {
    return (
        <div className="sorting-buttons-container">
            <input 
                type="text" 
                onKeyDown={(e) => props.handleEnterPress(e, "title")} 
                onChange={(e) => props.handleSearchChange(e, "title")} 
                value={props.titleSearchField} 
                placeholder="Search by Title" 
                className="search-bar" />
            <input 
                type="text" 
                onKeyDown={(e) => props.handleEnterPress(e, "artist")} 
                onChange={(e) => props.handleSearchChange(e, "artist")} 
                value={props.artistSearchField} 
                placeholder="Search by Artist" 
                className="search-bar" />
            <input 
                type="text" 
                onKeyDown={(e) => props.handleEnterPress(e, "year")} 
                onChange={(e) => props.handleSearchChange(e, "year")} 
                value={props.yearSearchField} 
                placeholder="Search by Year" 
                className="search-bar" />
            <button onClick={props.clearSearch}>Clear Search</button>
        </div>
    )
}

export default SearchFields;