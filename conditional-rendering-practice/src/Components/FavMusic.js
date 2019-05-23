import React from 'react';

const FavMusic = (props) => 
    props.music.map(m => {

        if (m.style === 'rock') {
            return <p key={m.id}>{m.style} is good</p>
        }
        else if (m.style === 'house') {
            return <p key={m.id}>{m.style} is better</p>
        }
        else if (m.style === 'country') {
            return <p key={m.id}>No Tay Tay allowed</p>
        }
        else {
            return <p key={m.id}>I don't know what {m.style} is...</p> 
        }
    })

    



export default FavMusic;