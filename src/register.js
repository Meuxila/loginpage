import React, { Component } from 'react';
import './App.css';
import './register.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { saveLocale } from './i18nInit';


import { t } from 'ttag';

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
                                onChange={(event, newValue) => this.setState({ username: newValue })
                                }
                            />
                            <TextField className="passwordField" id="passwordInput"
                                label={t`Password`}
                                type="password"
                                placeholder={t`Enter a password`}
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={(event, newValue) => this.setState({ password: newValue })
                                }
                            />
                            <TextField className="repPasswordField" id="repPasswordInput"
                                label={t`Repeat Password`}
                                type="password"
                                placeholder={t`Repeat the password`}
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={(event, newValue) => this.setState({ password: newValue })
                                }
                            />
                            <Button className="registerButton"
                                type="submit"
                                fullWidth variant="contained"
                                color="primary"
                                size="medium"
                                onClick={() => alert("Register Service temporarily out of order")}
                            >
                                {t`Register`}
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </div >
        );
    }
}

export default Register;
