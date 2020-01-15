import React from "react";
import {Toolbar, Button, GridList, BottomNavigation} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Login extends React.Component{

    render() {
        return(
<div>
    Login Form
</div>

      )

    }
}


const mapStateToProps = (state) => {
    return {
        user:{
        username: state.username,
        password: state.password }
    }
}
export default connect(mapStateToProps)(Login)