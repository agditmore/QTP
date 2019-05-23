import React from 'react';

const Form = (props) => (
    <div>
      <form onSubmit={props.onSubmit}>
        <p>My cool form:</p>
        <label>
          Input your favorite food
          <input type="text" value={props.food} onChange={props.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );

export default Form;