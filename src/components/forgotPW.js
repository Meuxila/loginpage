import React, { Component } from 'react';
import './../App.css';
import './forgotPW.css';

import Card from '@material-ui/core/Card';
import { CardContent, Grid, TextField, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import { t } from 'ttag';

class ForgotPW extends Component {

    backHandler = () => {
        this.props.history.push('/')
    }


    render() {
        return (
            <div className="forgotPW">
                <Card >
                    <CardContent>
                        <Typography className="heading">
                            {t`Recover the password`}
                        </Typography>

                        <div className="box">
                            <Grid container direction='column' justify='center' margin='40px' alignContent='center'>
                                <TextField className="mailField" id="mail"
                                    label={t`e-mail`}
                                    placeholder= {t`Enter your e-mail`}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={(event, newValue) => this.setState({ username: newValue })
                                    }
                                />

                                <Button className="summitButton"
                                    type="submit"
                                    fullWidth variant="contained"
                                    color="primary"
                                    size="medium"

                                    onClick={() => alert("Recovery Password Service temporarily out of order")}
                                >
                                    {t`Send`}
                                </Button>
                            </Grid>
                        </div>

                    </CardContent>
                </Card>
                <Button className="back" size="small" onClick={() => this.backHandler()}>
                    {t`Back`}
                </Button>
            </div>

        );
    }
}


export default ForgotPW;
