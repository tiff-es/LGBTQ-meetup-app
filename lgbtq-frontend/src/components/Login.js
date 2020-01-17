import React from "react";
import {Toolbar, Button, GridList, BottomNavigation} from "@material-ui/core";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";
import {login} from '../actions/login'



class Login extends React.Component{
    // state = {
    //  username: '',
    //     password: '',
    // }
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        } );
    }

     handleOnSubmit = (event) => {
         event.preventDefault();
this.props.login(this.state)
         // this.props.dispatch({type: 'LOGIN', currentUser: {username: this.state.username, password: this.state.username}})    }
     }
    //wire up mapDispatchToProps
    render() {
        return(
            <div id='login main-container' className='modal-body'>
               <h2 id='login-header' className='header-raised'> Login</h2>
                <Form id='login form' onSubmit={this.handleOnSubmit}>

                    <Form.Group id='login form-group username'onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label id='login form-label username'>Username</Form.Label>
                        <Form.Control id='username' type="text" placeholder="Username" />
                    </Form.Group>


                    <Form.Group id='login form-group password' onChange={this.handleInputChange} controlId="formBasicPassword">
                        <Form.Label id='login form-label password'>Password</Form.Label>
                        <Form.Control id='password' type="password" placeholder="Password" />
                    </Form.Group>

                    <Button id='login submit-btn' variant='primary' className='submitButton' type='submit'> Submit </Button>
                </Form>
            </div>


      )

    }


}


// const structuredSelector = createStructuredSelector({
//     users: state => state.users
// })

const mapStateToProps = (state) => {
    return {
        currentUser:{
            password: state.password,
            username: state.username,
            name: state.name,
            picture: state.picture,
            bio: state.bio,
            pronouns: state.pronouns }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (currentUser) => {
            dispatch(login(currentUser))
        }
    };
}




export default connect(mapStateToProps,  mapDispatchToProps)(Login)