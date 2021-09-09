import React, { Component, createRef } from 'react';
import Button from './Button';
import './Component.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
    this.state = {
      index: 0,
    };
  }

  setActive = (e, idx) => {
    e.preventDefault();
    const myNavList = this.myRef.current.children;
    for (let index = 0; index < myNavList.length; index++) {
      myNavList[index].className = '';
    }
    myNavList[idx].className = 'active';
  };

  render() {
    return (
      <div className='navbar'>
        <div id='leftNav'>
          <h2>Audy</h2>
        </div>
        <div ref={this.myRef} id='middleNav'>
          <a
            onClick={(e) => {
              this.setActive(e, 0);
            }}
            className='active'
            href='#'
          >
            Home
          </a>
          <a
            className=''
            onClick={(e) => {
              this.setActive(e, 1);
            }}
            href='#'
          >
            How we work
          </a>
          <a
            className=''
            onClick={(e) => {
              this.setActive(e, 2);
            }}
            href='#'
          >
            About
          </a>
          <a
            className=''
            onClick={(e) => {
              this.setActive(e, 3);
            }}
            href='#'
          >
            Contact
          </a>
        </div>
        <div id='rightNav'>
          <Button title='Get Started' />
        </div>
      </div>
    );
  }
}
