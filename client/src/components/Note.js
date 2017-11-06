import React from "react";
import "./Note.css";
//import axios from "axios";


const Note = (props) => {

    if (props.show === true) {

        console.log(props.articlenote);

    return (

        <div className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={props.close} >&times;</button>
                <h4 className="modal-title">{props.articlenote.title}</h4>
            </div>

            <div className="note">
            
            {props.articlenote.comment.length ? (

                props.articlenote.comment.map(note => {

                    return (

                        <div>
                        <h3>{note.body}</h3>
                        <button data_value={note._id} onClick={props.remove}>Remove</button>
                        </div>
                    )


                })



                


            ) : (<h3>No Comment</h3>) }
            
            </div>
            
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Add Notes</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={props.inputHandle}></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default closeNote" data_value={props.articlenote._id} data-dismiss="modal" onClick={props.close}>Close</button>
                <button type="button" className="btn btn-primary submitNote" data_value={props.articlenote._id} onClick={props.submit}>Submit</button>
            </div>
            </div>
        </div>
    </div>


    )
} else {

    return (null)

}



}

/*
class Note extends Component {

    state = {

        text: "",

    }


    handleInputChange = (e) => {

        this.setState({text: e.target.value});

    }

    handleSubmitNote = (e) => {
        
                e.preventDefault();
                let id = e.target.attributes.data_value.value;
                let body = this.state.text;
        
                console.log("clicked " + id + " " + "submit");
        
                axios.post("/note/" + id, {body}).then(res=>{
        
                    console.log(res);
                    this.setState({modalIsShown: false})
        
                }).catch(err => console.log(err));
        
        
            }


    render() {

        if (this.props.show === true) {

            console.log(this.props.articlenote);
            
                return (
            
                    <div className="modal fade in" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.props.close} >&times;</button>
                            <h4 className="modal-title">{this.props.articlenote.title}</h4>
                        </div>
            
                        <div className="note"></div>
            
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Add Notes</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={this.handleInputChange}></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default closeNote" data_value={this.props.articlenote._id} data-dismiss="modal" onClick={this.props.close}>Close</button>
                            <button type="button" className="btn btn-primary submitNote" data_value={this.props.articlenote._id} onClick={this.handleSubmitNote}>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
            
            
                )

        } else {

            return (null);

        }

    }

}
*/
export default Note;