import React from "react";
//import SavedItemRemoveButton from "./SavedItemRemoveButton";

const SavedItem = (props) => {

    return (

        <div className="media">
            <div className="media-left">
                <a target="_black" href={props.url}>
                <img className="media-object" src={props.img} alt="..."></img>
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.title}</h4>
                <h5>{props.date}</h5>
                <p>{props.summary}</p>
                <button className="btn btn-success noteButton" data_value={props._id}>Article Note</button>
                <button className="btn btn-danger removeButton" data_value={props._id} onClick={props.remove}>Remove Article</button>
            </div>
        </div>

    )


}

export default SavedItem;