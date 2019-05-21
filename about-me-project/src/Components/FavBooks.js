import React from 'react';

const FavBooks = (props) => {
    return (
        <div id="fav-books">
            <h1>Reading: </h1>
            {
                props.readingList.map(book => 
                    <div id="book-li">
                    <blockquote id="book" className="creation"><p>{book.title}</p></blockquote>
                    <cite id="author" className="creator">by {book.author}</cite>
                    </div>)
            }
        
        </div>
    )
};

export default FavBooks;