import React, { Component } from 'react';

import { NavLink, Switch, Route } from 'react-router-dom';
import './main.css';

import Login from './../components/login';
import Register from './../components/register';
import GoogleLogin from './../components/gooLogin';
import FacebookLogin from './../components/faceLogin';
import ForgotPW from './../components/forgotPW';
import Home from './../components/home';



class Main extends Component {
    state = {
        registered: false
    }

    loginHandler = (event) => {
        this.setState({ registered: !this.state.registered })
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    {this.state.registered ? <Route path="/home" exact render={(props) => <Home {...props} myHandler={this.loginHandler} />} /> : null}
                    {!this.state.registered ? <Route path="/home" exact render={(props) => <Login {...props} myHandler={this.loginHandler} />} /> : null}
                    {/* <Route path="/" render={(props) => <Login {...props} myHandler={this.loginHandler} />} /> */}

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
