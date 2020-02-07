import React from 'react';
import './assets/css/App.css';
import {Router, Switch} from "react-router-dom";
import { Route } from "react-router-dom"
import {connect} from "react-redux";
import Login from "./components/Login";
import createHistory from "history/createBrowserHistory";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import CreateMeetup from "./components/CreateMeetup";
import UsersContainer from "./containers/UsersContainer";

import NavBar from "./components/NavBar"
import MeetupsContainer from './containers/MeetupsContainer'

import MapComponent from "./components/MapComponent";


class App extends React.Component {
    // componentDidMount = () => {
    //     this.props.getProfileFetch()
    // }
    render() {

        const history = createHistory()

        return (

            <Router history={history}>
                <div>
                    <NavBar className='navbar'/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/createaccount" component={CreateAccount}/>
                        <Route path="/createmeetup" component={CreateMeetup}/>

                        <Route path="/login" component={Login}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/meetups' component={MeetupsContainer}/>
                        <Route path='/map' component={MapComponent}/>
                        <Route path="/*" component={() => 'NOT FOUND'}/>
                    </Switch>
                </div>
            </Router>
        )

    }
}

// const mapDispatchToProps = dispatch => ({
//     getProfileFetch: () => dispatch(getProfileFetch())
// })
//


export default connect()(App);
