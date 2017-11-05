import React, { Component } from "react";
import axios from "axios";
import HomeItem from "./HomeItem";
import HomeItemEmpty from "./HomeItemEmpty";

/*
const Home = () => {

    return (

        <div className="container-fluid">
        
            <div className="row">
        
                <div className="col-md-10 col-md-offset-1">
        
                    <div className="media">
                        <div className="media-left">
                            <a target="_black" href="#">
                            <img className="media-object" src="" alt="..."></img>
                            </a>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading"></h4>
                            <h5></h5>
                            <p></p>
                            <button className="btn btn-success saveButton" data_value="">Save Article</button>
                        </div>
                    </div>
        
                </div>
        
            </div>
        
        
        </div>


    )


}
*/

class Home extends Component {

    state = {

        data: [],

    }

    componentDidMount() {

        axios.get("/display")
             .then(res => {
                console.log(res.data);
                this.setState({data: res.data});

                
                
/*
                console.log("finshed hitting populate")

                axios.get("/display").then(result => {

                    this.setState({data: result.data})
                    console.log(result.data);

                })

*/
             }).catch(err => console.log(err));


    }

    handlePopulate = (e) => {

        axios.get("/populate")
        .then(res => {

           //this.setState({data: res.data})
           console.log("populated");
/*
           console.log("finshed hitting populate")

           axios.get("/display").then(result => {

               this.setState({data: result.data})
               console.log(result.data);

           })

*/
        }).catch(err => console.log(err));


    }

    render() {

        return (
            
                    <div className="container-fluid">
                    
                        <div className="row">
                    
                            <div className="col-md-10 col-md-offset-1">
                    
                            {this.state.data.length ? (
                                <div>
                                {this.state.data.map(item => (

                                    <div className="media">
                                        <div className="media-left">
                                            <a target="_black" href="/something">
                                            <img className="media-object" src={item.img} alt="..."></img>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="media-heading">{item.title}</h4>
                                            <h5>{item.date}</h5>
                                            <p>{item.summary}</p>
                                            <button className="btn btn-success saveButton" data_value={item._id}>Save Article</button>
                                        </div>
                                    </div>
                                    
                                ))}
                                </div>
                                ) : (<h3>No Results to Display</h3>)}

                    
                            </div>
                    
                        </div>
                    
                    </div>
            
            
                )

        
    }

}

export default Home;