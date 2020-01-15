import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapboxGl from "react-mapbox-gl";
import {Router, Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {connect} from "react-redux";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import createHistory from "history/createBrowserHistory";
import Home from "./components/Home";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2s1N2x6MnRpMDU3MjNscHMxdGRhcTZ6NiJ9.7D9NUZEVIS2O86VocLUXPQ\n.p6GGlfyV-WksaDV_KdN27A",})
function App() {
    const history = createHistory()

    return (

      <Router history={history}>
          <div>
              <NavBar/>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/*" component={() => 'NOT FOUND'} />
              </Switch>
          </div>
      </Router>
)

 }
const mapStateToProps = (state) => {
    return { testArray: state.testArray }
}
export default connect(mapStateToProps)(App);
