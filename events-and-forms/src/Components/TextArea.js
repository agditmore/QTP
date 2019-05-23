import React from 'react';

const TextArea = (props) => (
    <form onSubmit={props.onSubmit}>
      <p>Write me a poem</p>
      <label>
        Poem:
        <textarea value={props.poem} onChange={props.onChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

export default TextArea;