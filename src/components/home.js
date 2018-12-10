import React, { Component } from 'react';
import './home.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class Home extends Component {
    state = {
        registered: false
    }
    render() {
        return (
            <div className="homeWindow">
                <AppBar>
                    <Toolbar>

                        <div className="grow"></div>
                        <div>
                            <p>Growing together</p>
                        </div>
                    </Toolbar>
                </AppBar>


                <div className="body">

                    <h2>Welcome to our Home Page</h2>
                    <nav className="menu">
                        <ul>
                            <li>Products</li>
                            <li>Projects</li>
                            <li>Utilities</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>

                    </nav>
                </div>
                <div className = 'footer'>
                <p>This page is under construction</p>
                </div>
            </div>

        );
    }

}

export default Home;
