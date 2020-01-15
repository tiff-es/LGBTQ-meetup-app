import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ReactMapboxGl from "react-mapbox-gl";
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import {BrowserRouter, Link, NavLink, Switch} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {Toolbar} from "@material-ui/core";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2s1N2x6MnRpMDU3MjNscHMxdGRhcTZ6NiJ9.7D9NUZEVIS2O86VocLUXPQ\n.p6GGlfyV-WksaDV_KdN27A",})
function App() {
  return (
      <Home/>

)

 }

export default App;
