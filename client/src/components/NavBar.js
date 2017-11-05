import React from "react";

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

              <ul className="nav navbar-nav navbar-right">
                  <li><button className="btn btn-warning" id="populate">Populate Articles</button></li>
              </ul>

          </div>
      </nav>



    )




}

export default NavBar;