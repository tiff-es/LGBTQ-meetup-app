import React, {Component} from "react";
import {Toolbar, ButtonGroup, MenuList, GridListTileBar, CardHeader, TableHead} from "@material-ui/core";
import {Route, NavLink, Link,Switch, BrowserRouter as Router} from "react-router-dom";
import Button from "@material-ui/core/button"

import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/navbar.css'
export default class NavBar extends Component {

    render(){
        return(
            <Navbar className='top-nav'>

                <NavLink to="/"><Button className='navbar-btn'><div className='nav-link'>Home</div></Button></NavLink>
                <NavLink to="/createaccount"><Button className='navbar-btn'><div className='nav-link'>Create Account</div></Button></NavLink>
                <NavLink to="/login"><Button classname='navbar-btn'><div className='nav-link'>Login</div></Button></NavLink>

            </Navbar>



        )
    }
}