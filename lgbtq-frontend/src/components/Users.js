import React from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import { addUser, getUsers } from '../actions/user'

class Users extends React.Component {
    //
    // state = {
    //     users: []
    // }
    getUsers(){
        axios.get('http://localhost:3000/users')
            .then(response => {
                this.props.dispatch(getUsers(response.data))
            })
            .catch(e => console.log(e))

    }

  componentDidMount() {
        this.getUsers()

  }


    render(){
        return(
            <div><button onClick= {() => this.getUsers()}/></div>
        )}
}

const mapStateToProps = (state) => {
  return {


      ...state,
      users: state.users
  }
}


export default connect(mapStateToProps)(Users)
