import React, { Component } from "react";
import axios from "axios";

class NavBarPopulate extends Component {

    handlePopulate = (e) => {
        
        console.log("clicked populate");

                axios.get("/populate")
                .then(res => {
        
                   console.log(res.data);
        
                }).catch(err => console.log(err));
      
    }

    render() {

        return (
        <ul className="nav navbar-nav navbar-right">
            <li><button className="btn btn-warning" id="populate" onClick={this.handlePopulate}>Populate Articles</button></li>
        </ul>
        )


    }


};

export default NavBarPopulate;