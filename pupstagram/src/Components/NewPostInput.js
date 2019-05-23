import React from 'react';

const NewPostInput = (props) => {
    return (
    <div>
        <div>Image(s): <input 
        className="text-box"
        type="text" 
        placeholder="Image URL(s) here..."
        value={props.urlString}
        onKeyDown={(event) => props.onKeyDown(event, props.urlString, props.captionString)}
        onChange={props.onChange}
        />
        </div>
        <div>
        Caption: <input
        className="text-box"
        type="text"
        placeholder="Caption here..."
        value={props.captionString}
        onKeyDown={(event) => props.onKeyDown(event, props.urlString, props.captionString)}
        onChange={props.onCaptionChange}
        />
        </div>
    </div>
    )
}

export default NewPostInput;