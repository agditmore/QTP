import React from 'react';

const SearchFields = (props) => {
    return (
        <div className="sorting-buttons-container">
            <input 
                type="text" 
                onKeyDown={(e) => props.handleEnterPress(e)} 
                onChange={(e) => props.handleSearchChange(e)} 
                value={props.nameSearchField} 
                placeholder="Search by Name" 
                className="search-bar" />
            <button onClick={props.clearSearch}>Clear Search</button>
        </div>
    )
}

export default SearchFields;