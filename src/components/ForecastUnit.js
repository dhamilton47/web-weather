import React from 'react';


const ForecastUnit = ({ data }) => {
  const { day, icon, high, low } = data;
  //console.log(day, high, low)
  return (
    <div
      style={{
        border: `black 3px solid`,
        borderRadius: `10px`,
        display: `inline-block`,
        margin: `5px`,
        padding: `5px`,
        width: `200px`
       }}
    >
      <div style={{ display: `block`, border: `red solid 1px` }}>
        Day: { day }
      </div>
      
      <br />
      
      <div style={{ display: `block`, border: `red solid 1px` }}>Icon: { icon }</div><br />
      <div style={{ display: `block`, border: `red solid 1px` }}>High: { high }</div><br />
      <div style={{ display: `block`, border: `red solid 1px` }}>Low: { low }</div>
    </div>
  );
};

export default ForecastUnit;
