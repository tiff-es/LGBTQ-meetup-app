import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavBar from "./components/NavBar";
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from "react-redux";
import createHistory from 'history/createBrowserHistory';
import Login from "./components/Login";
import { Router, Route, Switch } from 'react-router-dom';import { routerReducer, routerMiddleware } from 'react-router-redux';
import testReducer from "./reducers/testReducer";
const history = createHistory()
// const store = createStore()
const store = createStore(
    testReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
    <Router history={history}>
        <div>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/*" component={() => 'NOT FOUND'} />
        </Switch>
        </div>
    </Router>
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();