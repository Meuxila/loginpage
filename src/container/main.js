import React, { Component } from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import './main.css';

import Login from './../components/login';
import Register from './../components/register';
import GoogleLogin from './../components/gooLogin';
import FacebookLogin from './../components/faceLogin';
import ForgotPW from './../components/forgotPW';



class Main extends Component {
    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/gooLogin" exact component={GoogleLogin} />
                    <Route path="/faceLogin" exact component={FacebookLogin} />
                    <Route path="/forgotPW" exact component={ForgotPW} />
                </Switch>
            </div>
        );
    }
}



export default Main;
