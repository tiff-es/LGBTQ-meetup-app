import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {addUser} from '../actions/user'
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup} from "react-bootstrap";
import Button from "@material-ui/core/Button";
import {Form} from "react-bootstrap";

class CreateAccount extends React.Component{

    state = {
        username: '',
        password: '',
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state)
        // this.props.dispatch({type: 'LOGIN', currentUser: {username: this.state.username, password: this.state.username}})    }
    }

    //wire up mapDispatchToProps

    render() {
        return(
            <div>
                Create Account
                <Form onSubmit={this.handleOnSubmit}>

                    <Form.Group onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Create Username" />
                    </Form.Group>


                    <Form.Group onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Create Password" />
                    </Form.Group>

                    <Button variant='primary' className='submitButton' action={addUser()} type="submit"> Submit </Button>
                </Form>
            </div>


        )}

}

let mapStateToProps = (state) => {
    return {user: {password: state.password,
            username: state.username}}
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)