import React from 'react';

const EventsAndState = (props) => (
    <div>
      <h2> Input a name </h2>
      <input
        type="text"
        value={props.name}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
      <p> Current Name: {props.name} </p>
      <p> Current array of people: {props.people.map((person, index) => {
        if (index !== (props.people.length - 1)) {
          return `${person}, `;
        } else {
          return person;
        }
      })} </p>
    </div>
);
export default EventsAndState;