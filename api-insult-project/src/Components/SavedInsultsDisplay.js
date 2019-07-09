import React from 'react';

const SavedInsultsDisplay = (props) => {
    return(
    <div>
        <div className="saved-insults-container">
                <div className="saved-insults-column-1">Before Translation</div>
                <div className="saved-insults-column-2">After Translation</div>
            </div>
        <hr />
    {props.bestInsults.map(insult => {
        return(
            <div className="saved-insults-container">
                <div className="saved-insults-column-1">{insult.start}</div>
                <div className="saved-insults-column-2">{insult.end}</div>
            </div>
        )
    })}
    </div>
    )
}

export default SavedInsultsDisplay;