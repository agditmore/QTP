import React from 'react';
import HelloEveryone from './HelloEveryone';
import GoodbyeEveryone from './GoodbyeEveryone';

const names = [
    {
        fname: 'Allison',
        lname: 'Wonderland'
    },
    {
        fname: 'Christian',
        lname: 'Bale',
    },
    {
        fname: 'Sam',
        lname: 'Tarly'
    }
];

const MyAwesomeFirstComponent = (props) => {
    return (
    <div>
        {names.map(name => 
        <HelloEveryone 
        key={name.fname}
        fname={name.fname} 
        name={name.lname}
        />)}
        {names.map(name =>
            <GoodbyeEveryone
            key={name.fname}
            firstName={name.fname}
            lastName={name.lname}
            />)}
    <GoodbyeEveryone
    firstName="Emily"
    lastName="Blunt" />
    </div>
    )};

export default MyAwesomeFirstComponent;