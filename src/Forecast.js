//const React = require ('react');
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
/*
export default () => {
  return (
    <div>
      <div style={{ display: `inline-block` }}>Day 1</div>
      <div style={{ display: `inline-block` }}></div>
      <div style={{ display: `inline-block` }}>Weather Icon 1</div>
      <div style={{ display: `inline-block` }}>High:</div>
      <div style={{ display: `inline-block` }}>Low:</div>
    </div>
  );
};
*/
class Forecast extends Component {
  render (){
    return (
      <div>
        <div style={{ display: `inline-block` }}>Day 1</div>
        <div style={{ display: `inline-block` }}></div>
        <div style={{ display: `inline-block` }}>Weather Icon 1</div>
        <div style={{ display: `inline-block` }}>High:</div>
        <div style={{ display: `inline-block` }}>Low:</div>
      </div>
    );    
  } 
}

export default hot(module)(Forecast);