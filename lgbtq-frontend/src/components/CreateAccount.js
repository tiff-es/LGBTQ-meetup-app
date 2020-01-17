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
            <div id='create-account main-container' className='modal-body'>
                <h2 id='create-account header 'className='header-raised'>Create Account</h2>
                <Form id='create-account form'onSubmit={this.handleOnSubmit}>

                    <Form.Group id='create-account form-group username'onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label id='create-account form-label username'>Username</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Create Username" />
                    </Form.Group>


                    <Form.Group id='create-account form-group password' onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label id='create-account form-label password'>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Create Password" />
                    </Form.Group>

                    <Button id='create-account submit-btn' variant='primary' className='submitButton' action={addUser()} type="submit"> Submit </Button>
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