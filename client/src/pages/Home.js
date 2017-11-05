import React, { Component } from "react";
import axios from "axios";
import HomeItem from "./HomeItem";

class Home extends Component {

    state = {

        data: [],

    }

    componentDidMount() {

        axios.get("/display")
             .then(res => {
                console.log(res.data);
                this.setState({data: res.data});

             }).catch(err => console.log(err));


    }

    handleSaveButton = (e) => {
        
                e.preventDefault();
        
                console.log(e.target.attributes.data_value.value);
                let id = e.target.attributes.data_value.value
        
                axios.post("/save/" + id).then(res => {
        
                    console.log(res);
        
                }).catch(err => console.log(err));
        
            }

    render() {

        return (
            
                    <div className="container-fluid">
                    
                        <div className="row">
                    
                            <div className="col-md-10 col-md-offset-1">
                    
                            {this.state.data.length ? (
                                this.state.data.map(item => {

                                    //console.log(item);

                                    const {title, date, summary, img, _id, url} = item;

                                    return (<HomeItem title={title} date={date} summary={summary} img={img} _id={_id} url={url} save={this.handleSaveButton}/>)

                                })) : (<h3>No Results to Display</h3>)}

                    
                            </div>
                    
                        </div>
                    
                    </div>
            
            
                )

        
    }

}

export default Home;