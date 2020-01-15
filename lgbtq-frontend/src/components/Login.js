import React from "react";
import {Toolbar, Button, GridList, BottomNavigation} from "@material-ui/core";


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