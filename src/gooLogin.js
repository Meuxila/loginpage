import React, { Component } from 'react';
import './App.css';
import './gooLogin.css';

import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


import { t } from 'ttag';

class GoogleLogin extends Component {
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

            </div>

        );
    }

}

export default GoogleLogin;
