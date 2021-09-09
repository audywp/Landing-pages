import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home
          name='Audy Wisuda Pratama'
          age={20}
          kriteria={{ height: '160 cm', weight: '86 lbs' }}
          hobbies={['Tidur', 'dll']}
        />
      </div>
    );
  }
}

export default App;
