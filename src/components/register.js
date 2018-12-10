import React, { Component } from 'react';
import './../App.css';
import './register.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { saveLocale } from '../i18nInit';


import { t } from 'ttag';
import { jt } from 'ttag';

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

class Register extends Component {
    state = {
        username: '',
        password1: '',
        password2: '',
        registered:'',
        error: ''
    }
    backHandler = () => {
        this.props.history.push('/')
    }

    registerHandler = () => {
        if (this.state.password1.length >= 5 && this.state.password1 === this.state.password2) {
            this.props.history.push('/')
        this.registered = 'true'
        }
        else if (this.state.password1.length < 5) {
            this.setState({ error: 'Password should be 6 or longer' })
            alert('Password should be 6 or longer')
        } else {
            this.setState({ error: 'Passwords don\'t match' })
            alert('Passwords don\'t match')
        }
    }

    render() {
        return (
            <div className="registerWindow">
                <Card>
                    <CardContent>
                        <Typography>
                            {t`Register`}
                        </Typography>
                        <AppBar>
                            <Toolbar>
                                <div className="grow"></div>
                                <div className="languageButtons">
                                    <LanguageSwitcher />
                                </div>
                            </Toolbar>
                        </AppBar>
                        <Grid container direction='column' justify='center' margin='40px' alignContent='center'>
                            <TextField className="userNameField" id="username"
                                label={t`Username`}
                                placeholder={t`Enter a Username`}
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => this.setState({ username: event.target.value })
                                }
                            />
                            <TextField className="passwordField" id="passwordInput"
                                label={t`Password`}
                                type="password"
                                placeholder={t`Enter a password`}
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => this.setState({ password1: event.target.value })
                                }
                            />
                            <TextField className="repPasswordField" id="repPasswordInput"
                                label={t`Repeat Password`}
                                type="password"
                                placeholder={t`Repeat the password`}
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => this.setState({ password2: event.target.value })
                                }
                            />
                            <Button className="registerButton"
                                type="submit"
                                fullWidth variant="contained"
                                color="primary"
                                size="medium"
                                onClick={() => this.registerHandler()}
                            >
                                {t`Register`}
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
                <Button className="back" size="small" onClick={() => this.backHandler()}>
                    {t`Back`}
                </Button>
            </div >
        );
    }
}

export default Register;
