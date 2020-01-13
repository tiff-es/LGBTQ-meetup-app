import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from "./components/NavBar";
import {Switch} from "@material-ui/core";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router } from 'react-router-dom'
import {Route} from "react-router-dom";



ReactDOM.render(
    <Router>
<div>
                <Route path="/" component={App}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
</div>
    </Router>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();