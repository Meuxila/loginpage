import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { saveLocale } from './i18nInit';

import Login from './login';
import Register from './register';
import GoolgeLogin from './gooLogin';

import {BrowserRouter} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
         <Login />
          {/* <Register/> */} 
          {/* <GoolgeLogin/> */}
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
 