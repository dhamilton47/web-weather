import React from 'react';

const Controls = () => {
  return (
    <div style={{ border: `solid red 1px` }}>
      This is where the weather data selector and location input go
      <form>
        <input type="text" name="location" placeholder="Please enter City, State/Province, Country" />
        <select name="whatData" id="weather-selector">
          <option value="currently">Currently</option>
          <option value="forecast">Forecast</option>
        </select>
        <button type="submit">Submit</button>        
      </form>
    
    </div>
  );
}

export default Controls;