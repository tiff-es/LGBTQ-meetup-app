
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth";
import {connect} from "react-redux";
import {axiosGetUsers} from "./actions/user";

const PrivateRoute = ( { component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      props.isLoggedIn === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )}
           />
)



const mapDispatchToProps = (dispatch) => {
    return{
        axiosGetUsers: (users) => {
            dispatch(axiosGetUsers(users))
        }
    }

}

let mapStateToProps = (state) => {
    console.log(state)
    return {currentUser: state.isLoggedIn}
}

export default connect(mapDispatchToProps, mapStateToProps)(PrivateRoute);