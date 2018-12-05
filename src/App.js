import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Main from './container/main';

import { BrowserRouter } from 'react-router-dom'




class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;
