import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";

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
        this.props.dispatch({type: 'ADD_USER', user: this.state})
    }

    render() {
        return(
            <div>
                Create Account
                <form onSubmit={this.handleOnSubmit}>
                    <p>
                        <input
                            type="text"
                            id="username"
                            onChange={this.handleInputChange}
                            placeholder="username"
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            id="password"
                            onChange={this.handleInputChange}
                            placeholder="password"
                        />
                    </p>
                    <input type="submit" />
                </form>
            </div>


        )}

}

let mapStateToProps = (state) => {
    return {user: {password: state.password,
    username: state.username}}
}

export default connect(mapStateToProps)(CreateAccount)