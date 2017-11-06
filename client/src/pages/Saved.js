import React, { Component } from "react";
import SavedItem from "./SavedItem";
import axios from "axios";
import Note from "./../components/Note";

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
        modalIsShown: false,
        articleNotes: null,
        text: "",

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

    handleNote = (e) => {

        e.preventDefault();
        let id = e.target.attributes.data_value.value

        console.log("clicked " + id + " " + "note button");

        axios.get("/note/" + id).then(res => {

            console.log(res.data);
            this.setState({articleNotes: res.data})
            this.setState({modalIsShown: true})

        }).catch(err => console.log(err));

    };



    handleCloseModal = (e) => {
        
        this.setState({modalIsShown: false})
        
    };

    handleInputChange = (e) => {
        
        this.setState({text: e.target.value});
        
    }
        
    handleSubmitNote = (e) => {
        
        //this.setState({modalIsShown: false})
        //handleCloseModal();

        e.preventDefault();
        let id = e.target.attributes.data_value.value;
        let body = this.state.text;
                
        console.log("clicked " + id + " " + "submit");
                
        axios.post("/note/" + id, {body}).then(res => {
                
            console.log(res);

            axios.get("/note/" + id).then(res => {
                
                console.log(res.data);
                this.setState({articleNotes: res.data})
                this.setState({modalIsShown: true})
                
            }).catch(err => console.log(err));
            
            
        }).catch(err => console.log(err));
                
    }

    removeNote = (e) => {

        e.preventDefault();
        let id = e.target.attributes.data_value.value;
        axios.delete("/note/" + id).then(res => {

            console.log(res);

            this.setState({modalIsShown: false});
            

        }).catch(err => console.log(err));

    }

    render() {

        return (

            <div>

            <div className="container-fluid">
            
                <div className="row">
            
                    <div className="col-md-10 col-md-offset-1">

                    {this.state.savedArticle.length ? 
                        
                        (this.state.savedArticle.map(item => {

                            const {title, summary, date, img, url, _id} = item;

                            return (<SavedItem title={title} summary={summary} date={date} img={img} url={url} _id={_id} remove={this.handleRemoveButton} note={this.handleNote}/>)

                    })) : (<h3>No Saved Article</h3>) }
            
                    </div>
            
                </div>
            
            
            </div>

            <Note show={this.state.modalIsShown} close={this.handleCloseModal} submit={ this.handleSubmitNote } remove = {this.removeNote} inputHandle={this.handleInputChange} articlenote={ this.state.articleNotes }/>

            </div>

        )


    }


}

export default Saved;