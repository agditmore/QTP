import React from 'react';

const FavQuotes = (props) => {
    return (
        <div id="fav-quotes">
        <h1>Saying:</h1>
            {
                props.quotations.map(quotation => 
                    <div id="quote-li">
                    <blockquote id="quote" className="creation"><p>{quotation.quote}</p></blockquote>
                    <cite id="citation" className="creator">-- {quotation.citation}</cite></div>)
            }
        
        </div>
    )
};

export default FavQuotes;