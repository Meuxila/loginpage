import React, { Component } from 'react';

import './../App.css';
import './Login.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { saveLocale } from '../i18nInit';
import { t } from 'ttag';
import { set } from '../cookie';



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
    password: '',
    error:''
  }

  loginHandler =() => {
    if (this.state.username === 'newuser' && this.state.password === 'p123456') {
      this.props.myHandler()
      this.props.history.push('/home')
    }
    else{
      alert("Invalid username or password")
      this.setState({error: 'ERROR-1' })
    }
  }

  registerHandler = () => {
    this.props.history.push('/register')
  }
  gooLoginHandler = () => {
    this.props.history.push('/gooLogin')
  }
  faceLoginHandler =()=> {
    this.props.history.push('/faceLogin')
  }
  passwordHandler = () => {
    this.props.history.push('/forgotPW')
  }

  render() {
    let errorHtml = ''
    switch (this.state.error) {
      case 'ERROR-1': errorHtml = <p style={{color: 'red'}}>{t`Invalid username or password`}</p>
                      break;
    }
    return (
      <div className="loginWindow">
        <Card className="loginCard">
          <CardContent>
            <Typography className="heading">
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
                  onChange={(event) => this.setState({ username: event.target.value })
                  }
                />
                <TextField className="passwordField" id="passwordInput"
                  label={t`Password`}
                  type="password"
                  placeholder={t`Enter your password`}
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => this.setState({ password: event.target.value })
                  }
                />

                <Button className="summitButton"
                  type="submit"
                  fullWidth variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => this.loginHandler()}>
                  {t`Sign in`}
                </Button>
                {errorHtml}
                <Button
                  style={{ marginBottom: 40 }} onClick= {() => this.passwordHandler()}>
                  {t`Forgot your password?`}
                </Button>
              </Grid>
            </div>
            <Grid container direction='column' justify='center' margin='40px' alignContent='center'>

              <Button className="GoButton" variant="outlined" style={{ marginBottom: 5 }} onClick={() => this.gooLoginHandler()}>
                {t`Login with Google`}
              </Button>

              <Button className="FbButton" variant="outlined" style={{ marginBottom: 30 }} onClick = {()=> this.faceLoginHandler()}>
                {t`Login with Facebook`}
              </Button>

              <Typography className='registerTypo'>
                {t`Not registered yet?`}
              </Typography>
              <Button
                type="submit"
                fullWidth variant="contained"
                color="primary"
                onClick={() => this.registerHandler()}>
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
