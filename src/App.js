import React, { Component } from 'react';
//import logo from './logo.svg';
import Button from '@material-ui/core/Button';

import './App.css';
import Login from './login';





class App extends Component {
  render() {
    return (
      <div className="App">
 
       <Button id = "Button" variant="outlined" size="small" color="primary">
         EN
        </Button>
        <Button id = "Button" variant="outlined" size="small" color="primary">
         DE
        </Button>
        <Button id = "Button" variant="outlined" size="small" color="primary">
         SW
        </Button>
       
      <Login/>
      </div>
      
    );
  }
}

export default App;
