import React, { Component } from "react";
import SavedItem from "./SavedItem";
import axios from "axios";

/*
const Saved = () => {

    return (

        <div>
        <h1>Saved</h1>
        </div>

    )

}
*/



class Saved extends Component {

    state = {

        savedArticle: [],

    }

    componentDidMount() {

        axios.get("/saved").then(res => {

            console.log(res.data);
            this.setState({savedArticle: res.data})

        }).catch(err => console.log(err))

    }

    handleRemoveButton = (e) => {
        
        e.preventDefault();
        
        console.log(e.target.attributes.data_value.value);
        let id = e.target.attributes.data_value.value
    
        
        axios.post("/remove/" + id).then(res => {
        
            console.log(res);
            axios.get("/saved").then(res => {
                
                            console.log(res.data);
                            this.setState({savedArticle: res.data})
                
                        })
            
        
        }).catch(err => console.log(err));
        
    }

    render() {

        return (

            <div className="container-fluid">
            
                <div className="row">
            
                    <div className="col-md-10 col-md-offset-1">

                    {this.state.savedArticle.length ? 
                        
                        (this.state.savedArticle.map(item => {

                            const {title, summary, date, img, url, _id} = item;

                            return (<SavedItem title={title} summary={summary} date={date} img={img} url={url} _id={_id} remove={this.handleRemoveButton}/>)

                    })) : (<h3>No Saved Article</h3>) }
            
                    </div>
            
                </div>
            
            
            </div>



        )


    }


}

export default Saved;