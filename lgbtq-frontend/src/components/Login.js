import React from "react";
import {Toolbar, Button, GridList} from "@material-ui/core";
import {NavLink, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";

export default class Login extends React.Component{
    render() {
  return(
      <div>
          <GridList>
      <Button>Log in</Button>
      <Button>Create Account</Button>
          </GridList>
      </div>)
    }
}