import React, { Component } from 'react';

import './App.css';
import './Login.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { saveLocale } from './i18nInit';
import { t } from 'ttag';

import { BrowserRouter, Link, Route} from 'react-router-dom';
import Register from './register';


/* const isLogged = () => {
  return (console.log("Logged"))
}
 */
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
        onClick={setLocale('ja')}>
        JA
      </Button>
    </div>
  )
}



class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div className="loginWindow">
        <Card className="loginCard" >
          <CardContent>
            <Typography>
              {t`Login`}
            </Typography>
            <AppBar>
              <Toolbar>
                <div className="grow"></div>
                <div className="languageButtons">
                  <LanguageSwitcher />
                </div>
              </Toolbar>
            </AppBar>
            <div className="box">
              <Grid container direction='column' justify='center' margin='40px' alignContent='center'>
                <TextField className="userNameField" id="username"
                  label={t`Username`}
                  placeholder={t`Enter your Username`}
                  margin="normal"
                  variant="outlined"
                  onChange={(event, newValue) => this.setState({ username: newValue })
                  }
                />
                <TextField className="passwordField" id="passwordInput"
                  label={t`Password`}
                  type="password"
                  placeholder={t`Enter your password`}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={(event, newValue) => this.setState({ password: newValue })
                  }
                />

                <Button className="summitButton"
                  type="submit"
                  fullWidth variant="contained"
                  color="primary"
                  size="medium"

                  onClick={() => alert("Login Service temporarily out of order")}
                >
                  {t`Sign in`}
                </Button>
                <Button
                  style={{ marginBottom: 50 }}>
                  {t`Forgot your password?`}
                </Button>
              </Grid>
            </div>
            <Grid container direction='column' justify='center' margin='40px' alignContent='center'>
            
            <BrowserRouter>
                <Link to ="/gooLogin">
              <Button className="GoButton" variant="outlined" style={{ marginBottom: 5 }}>
                {t`Login with Google`}
              </Button>
              </Link>
              {/* <Route exact path = "/gooLogin" component = {Register}/> */}
              </BrowserRouter>

              <Button className="FbButton" variant="outlined" style={{ marginBottom: 20 }}>
                {t`Login with Facebook`}
              </Button>

              <Typography className='registerTypo'>
                {t`Not registered yet?`}
              </Typography>


                <Button
                  type="submit"
                  fullWidth variant="contained"
                  color="primary"
                  onClick={() => alert("Register Service temporarily out of order")}>
                  {t`Register`}
                </Button>

            </Grid>

          </CardContent>
        </Card>

      </div>

    );
  }
}


export default Login;
