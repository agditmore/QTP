import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  const TemperatureInput = (props) => (
    <fieldset>
      <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
      <input
        value={props.temperature}
        onChange={(e) => props.onTemperatureChange(e.target.value)} />
    </fieldset>
  );  

export default TemperatureInput;