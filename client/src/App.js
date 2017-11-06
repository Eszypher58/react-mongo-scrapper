import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
//import HeadImg from "./components/HeadImg";
//import Note from "./components/Note";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div id="img1">
          <NavBar />
          <div className="headerblock">
                <h1>Mongo Scraper</h1>
                <p>A Nature Scraper with Community Comment</p>
          </div>

        </div>

      <Route exact path="/" component={ Home } />
      <Route exact path="/save" component={ Saved } />
      </div>
      </Router>
      
    )
  }
}

export default App;
