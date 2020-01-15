import React from "react";
import {Toolbar, Button, GridList, BottomNavigation} from "@material-ui/core";
import {NavLink, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

export default class Login extends React.Component{
    render() {
  return(

          <GridList>
      <Button>Log in</Button>
      <Button>Create Account</Button>
          </GridList>
      )
    }
}