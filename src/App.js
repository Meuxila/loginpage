import React, { Component } from 'react';
//import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import Login from './login';
import { saveLocale } from './i18nInit';

//PO works with locale = language
const setLocale = (locale) => (ev) => {
  ev.preventDefault();
  saveLocale(locale);
  window.location.reload();
}

const LanguageSwitcher = () => {
  return (
    <div className="Language-switch">

      <Button id="Button" variant="outlined" size="small" color="primary"
        onClick={setLocale('en')}>
        EN
      </Button>
      <Button id="Button" variant="outlined" size="small" color="primary"
        onClick={setLocale('de')}>
        DE
      </Button>
      <Button id="Button" variant="outlined" size="small" color="primary"
        onClick={setLocale('sv')}>
        SV
      </Button>
    </div>
  )
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar>
          <Toolbar>
            <div className="grow"></div>
            <div className="languageButtons">
              <LanguageSwitcher />

            </div>
          </Toolbar>
        </AppBar>
        <Login />
      </div>

    );
  }
}

export default App;
