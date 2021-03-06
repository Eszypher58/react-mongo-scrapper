import React from "react";
//import HomeItemSaveButton from "./HomeItemSaveButton";

const HomeItem = (props) => {

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
                <p>{props.summry}</p>
                <button className="btn btn-success saveButton" data_value={props._id} onClick={props.save}>Save Article</button>
            </div>
        </div>

)


}

export default HomeItem;