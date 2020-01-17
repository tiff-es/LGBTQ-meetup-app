import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";

export default class Home extends React.Component{
    state = { users: []
        // username: '',
        //    password: ''
    }
    render() {
        return(
            <div>
                Home
                {/*<button onClick={() => this.state.getUsers()}>Get Users</button>*/}


            </div>

    )}
}
//

// const getUsers = () =>  {
//         dispatch({type: 'GET_USERS_REQUEST'})
//          fetch('/users.json')
//             .then(resp => resp.json())
//             .then(json => dispatch(getUsersSuccess(json)))
//     }
//
// }
// const getUsersSuccess = json =>{
//
//     return{
//         type: 'GET_USERS_SUCCESS',
//         json
//     }
// }
//
//     const mapStateToProps = () => {
//         return {
//             getUsers
//         }
//     }
//     }




// connect(mapStateToProps)(Home)