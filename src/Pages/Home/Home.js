import React, { Component } from 'react';
import './Home.css';
import Image2 from '../../Assets/Images/image2.svg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.greetings = this.greetings.bind(this);
  }

  greetings() {
    alert(`Hallo ${this.props.name}, Welcome!!`);
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className='desc'>
          <h1>Make your own website come true</h1>
          <p>Smart tool to create your own website just drag and drop it and publish it</p>
        </div>
        <img id='myImage' src={Image2} alt='images' />
      </div>
    );
  }
}
export default Home;
