import React, { Component } from 'react';
import './Component.css';

export default class Button extends Component {
  render() {
    return (
      <div className='button'>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
