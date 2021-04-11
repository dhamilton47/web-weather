import React from 'react';
//import { hot } from 'react-hot-loader';
import { forecastData } from './forecastData';
import ForecastUnit from './ForecastUnit';


const ForecastContainer = () => {
  const data = forecastData

  return (
    <div
      style={{
        align: `center`,
        border: `red solid 1px`,
        margin: `50px auto`,
      }}>
        {data.map(day => <ForecastUnit key={data.indexOf(day)} data={day}/>)}
    </div>
  )
}

export default ForecastContainer;
//export default hot(module)(ForecastContainer);
