import React, { Component } from 'react';

import './App.css';
import './login.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import {t} from 'ttag';



/* const isLogged = () => {
  return (console.log("Logged"))
}
 */

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  
  render() {
    return (
      <div className="loginWindow">
        <Card>
          <CardContent>
            <Typography>
              {t`Login`}
              </Typography>
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
                  style={{ marginBottom: 50 }}
                  onClick = {() => alert("Login Service temporarily out of order")}
                >
                  {t`Sign in`}
              </Button>

              </Grid>
              </div>
              <Grid container direction='column' justify='center' margin='40px' alignContent='center'>

                <button  className="GoButton">
                  {t`Login with Google`}
                </button>

                <button className="FbButton">
                  {t`Login with Facebook`}
                </button>

                <Typography className='registerTypo'>
                  {t`Not registered yet?`}
                </Typography>

                <Button
                  type="submit"
                  fullWidth variant="contained"
                  color="primary"
                  onClick = {() => alert("Register Service temporarily out of order")}>
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
