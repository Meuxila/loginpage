import React, { Component } from 'react';
import './../App.css';
import './gooLogin.css';

import Card from '@material-ui/core/Card';
import { CardContent, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import { t } from 'ttag';

class GoogleLogin extends Component {
    backHandler = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="googleWindow">
                <Card>
                    <CardContent>
                        <Typography>
                            {t`Choose an account`}
                        </Typography>
                    </CardContent>
                </Card>
                <Typography>
                    -----------
                  </Typography>
                <Card>
                    <CardContent>
                        <Typography>
                            {t`Create an account`}
                        </Typography>

                    </CardContent>
                </Card>
                <Button className="back" size="small" onClick={() => this.backHandler()}>
                    {t`Back`}
                </Button>
            </div>

        );
    }

}

export default GoogleLogin;
