import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {CardTitle, MDBCardHeader, MDBCardTitle} from "mdbreact";
import {Card} from "mdbreact";
export default class Home extends React.Component{
    // state = { users: []
    //     // username: '',
    //     //    password: ''
    // }
// componentDidMount() {
//
// }

    render() {
        return(
            <div id='home main-container'>
                <Card id='home-card'>
                        <MDBCardTitle className='card-header text-lg-left' align='center' id='home-card header'>Welcome to LGBTQ Meet!</MDBCardTitle>
                </Card>
                {/*<button onClick={() => this.state.getUsers()}>Get Users</button>*/}
                


            </div>

    )}
}
//




connect()(Home)