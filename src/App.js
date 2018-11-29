import React, { Component } from 'react';
//import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import Login from './login';
import {saveLocale} from './i18nInit';


const setLocale = (locale) => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
}

const LaguageSwitcher = () => (
  <div className="Language-switch">
    <a href='/' onClick={setLocale('de')}>de</a>
  </div>
)



class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>
            <div className="grow"></div>
            <div className="languageButtons">
            <LaguageSwitcher />
              <Button id="Button" variant="outlined" size="small" color="primary">
                EN
        </Button>
              <Button id="Button" variant="outlined" size="small" color="primary">
                DE
        </Button>
              <Button id="Button" variant="outlined" size="small" color="primary">
                SV
        </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Login />
      </div>

    );
  }
}

export default App;
