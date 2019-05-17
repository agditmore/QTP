import React from 'react';

const MyAwesomeFirstComponent = (props) => {
    console.log(props);
    return (
    <p>Hello {props.firstName} {props.lastName}</p>
    )};

export default MyAwesomeFirstComponent;