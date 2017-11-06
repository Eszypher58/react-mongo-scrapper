import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
//import Note from "./components/Note";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavBar />
      

      <Route exact path="/" component={ Home } />
      <Route exact path="/save" component={ Saved } />
      </div>
      </Router>
      
    )
  }
}

export default App;
