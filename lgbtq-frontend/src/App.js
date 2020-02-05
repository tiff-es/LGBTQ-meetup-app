import React from 'react';
import './assets/css/App.css';
import ReactMapboxGl from "react-mapbox-gl";
import {Router, Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {connect} from "react-redux";
import Login from "./components/Login";
import createHistory from "history/createBrowserHistory";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import CreateMeetup from "./components/CreateMeetup";
import UsersContainer from "./containers/UsersContainer";

import NavBar from "./components/NavBar"
import Users from "./containers/UsersContainer";
import MeetupsContainer from './containers/MeetupsContainer'
import {getProfileFetch} from "./actions/user";
import Layer from "react-mapbox-gl/lib-esm/layer";
import Feature from "react-mapbox-gl/lib-esm/feature";
import MapComponent from "./components/MapComponent";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


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
