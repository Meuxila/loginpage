import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { saveLocale } from './i18nInit';

import Login from './login';
import Register from './register';
import GoolgeLogin from './gooLogin';


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
        <div>
       <Login />
        {/* <Register/> */}
{/* <GoolgeLogin/> */}
        </div>
       
      </div>

    );
  }
}

export default App;
