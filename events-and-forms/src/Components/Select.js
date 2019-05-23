import React from 'react';

const Select = (props) => (
    <form onSubmit={props.onSubmit}>
       <label>
         Pick your favorite chocolate bar:
         <select value={props.chocolate} onChange={props.onChange}>
           <option>Select One</option>
           <option value="white-chocolate">White Chocolate</option>
           <option value="milk-chocolate">Milk Chocolate</option>
           <option value="coconut">Coconut</option>
           <option value="dark-chocolate">Dark Chocolate</option>
         </select>
       </label>
       <input type="submit" value="Submit" />
     </form>
  )

export default Select;