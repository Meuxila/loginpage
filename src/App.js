import React, { Component } from 'react';
//import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import Login from './login';





class App extends Component {
  render() {
    return (
      <div className="App">
 <AppBar>
 <Toolbar>
   <div className = "grow"></div>
   <div className = "languageButtons">
       <Button id = "Button" variant="outlined" size="small" color="primary">
         EN
        </Button>
        <Button id = "Button" variant="outlined" size="small" color="primary">
         DE
        </Button>
        <Button id = "Button" variant="outlined" size="small" color="primary">
         SW
        </Button>
        </div>
        </Toolbar>
        </AppBar>
      <Login/>
      </div>
      
    );
  }
}

export default App;
