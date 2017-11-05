import React, { Component } from "react";
import NavBarPopulate from "./NavBarPopulate"

const NavBar = () => {


    return (
        <nav className="navbar navbar-inverse titlebar">
        <div className="container">

          <div className="navbar-header">
              <a className="navbar-brand" href="/">Mongo Scraper</a>
          </div>

              <ul className="nav navbar-nav">
                  <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
                  <li><a href="/save">Saved Article</a></li>
              </ul>

              <NavBarPopulate />

          </div>
      </nav>



    )




}

export default NavBar;