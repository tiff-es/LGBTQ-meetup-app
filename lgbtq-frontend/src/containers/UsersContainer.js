import React from "react";
import axios from 'axios'
import { connect } from 'react-redux'
import { addUser, getUsers } from '../actions/user'
import {Card} from "react-bootstrap";
import UserCard from '../components/UserCard'
class UsersContainer extends React.Component {

    getUsers(){
        axios.get('http://localhost:3000/api/users')
            .then(response => {
                this.props.dispatch(getUsers(response.data))
            })
            .catch(e => console.log(e))

    }

    // mapUsers() {
    //     this.props.users.map((user, index) => {
    //       return (<UserCard key={index} user={user}/>)
    //
    //   })
    // }
  componentDidMount() {
        this.getUsers()
  }
    render(){
       return (

    <div>
        {/*{mapUsers here}*/}
    </div>
       )
    }
}

const mapStateToProps = (state) => {
  return {

      users: state.users
  }
}

export default connect(mapStateToProps)(UsersContainer)
