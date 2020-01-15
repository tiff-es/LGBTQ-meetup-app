import React, {Component} from "react";
import {Toolbar, ButtonGroup, MenuList, GridListTileBar, CardHeader, TableHead} from "@material-ui/core";
import {Route, NavLink, Link,Switch, BrowserRouter as Router} from "react-router-dom";
import {Button, AppBar} from "@material-ui/core/"
import Home from "./Home";
import Login from "./Login";
import Menu from "@material-ui/core/Menu";
import App from "../App";

export default class NavBar extends Component {

    render(){
        return(
            <Toolbar className='navbar-dark'>

                <NavLink to="/"><Button>Home</Button></NavLink>
                <NavLink to="/createaccount"><Button>Create Account</Button></NavLink>
                <NavLink to="/login"><Button>Login</Button></NavLink>

            </Toolbar>



        )
    }
}