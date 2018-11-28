import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import './Login.css';


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
              Login
              </Typography>
            <div className="box">
              <Grid container direction='column' justify='center' margin='40px' alignContent='center'>
                <TextField className="userNameField"
                  id="userName"
                  label="Username"
                  placeholder="Enter your Username"
                  margin="normal"
                  variant="outlined"
                  onChange={(event, newValue) =>
                    this.setState({ username: newValue })
                  }
                />
                <TextField className="passwordField"
                  id="passwordInput"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={(event, newValue) =>
                    this.setState({ password: newValue })
                  }
                />

                <Button className="summitButton"
                  type="submit"
                  fullWidth variant="contained"
                  color="primary"
                  size="medium"
                  style={{ marginBottom: 50 }}
                  onClick={(event) => this.handleSummit(event)}
                >
                  Sign in
              </Button>

              </Grid>
              </div>
              <Grid container direction='column' justify='center' margin='40px' alignContent='center'>

                <Button  className="summitButton"
                  type="submit"
                  fullWidth variant="contained" 
                  size="medium" 
                  style={{ marginBottom: 10 }}>
                  Login with Google
                </Button>

                <Button className="summitButton"
                  type="submit"
                  fullWidth variant="contained"
                  size="medium" 
                  style={{ marginBottom: 30 }}>
                  login with Facebook
                </Button>

                <Typography className='registerTypo'>
                  Not registered yet?
              </Typography>
                <Button
                  type="submit"
                  fullWidth variant="contained"
                  color="primary"
                >
                  Register
              </Button>
              </Grid>
            
          </CardContent>
        </Card>




        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </div>

    );
  }
}

export default Login;
