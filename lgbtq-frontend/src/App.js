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

import NavBar from "./components/NavBar"
import Users from "./components/Users";
import Meetups from './components/Meetups'

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2s1N2x6MnRpMDU3MjNscHMxdGRhcTZ6NiJ9.7D9NUZEVIS2O86VocLUXPQ\n.p6GGlfyV-WksaDV_KdN27A",})
function App() {
    const history = createHistory()

    return (

      <Router history={history}>
          <div>
              <NavBar  className=''/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/createaccount" component={CreateAccount} />
                  <Route path="/createmeetup" component={CreateMeetup} />

                  <Route path="/login" component={Login} />
               <Route path='/users' component={Users}/>
                  <Route path='/meetups' component={Meetups}/>
                  <Route path="/*" component={() => 'NOT FOUND'} />
              </Switch>
          </div>
      </Router>
)

 }
const mapStateToProps = (state) => {
    return {user: state.user}
}


export default connect(mapStateToProps)(App);
