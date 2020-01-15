import React from "react";
import {Toolbar, Button, GridList, BottomNavigation} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import {login} from '../actions/login'


class Login extends React.Component{
    state = {
     username: '',
        password: ''
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        } );
    }

     handleOnSubmit = (event) => {
        event.preventDefault();

         this.props.dispatch({type: 'LOGIN', currentUser: {username: this.state.username, password: this.state.username}})    }

    //wire up mapDispatchToProps
    render() {
        return(
            <div>
                Login
                <Form onSubmit={this.handleOnSubmit}>

                    <Form.Group onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Username" />
                    </Form.Group>


                    <Form.Group onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant='primary' className='submitButton' type='submit'> Submit </Button>
                </Form>
            </div>


      )

    }
}


const mapStateToProps = (state) => {
    return {
        currentUser:{
        username: state.username,
        password: state.password }
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (state) => {
//             dispatch(login())
//         }
//     };
// }
//

export default connect(mapStateToProps)(Login)