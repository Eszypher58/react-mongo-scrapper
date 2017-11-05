import React from "react";

const HomeItem = (props) => {

    let dataArr = props.data;

    //console.log(props.data);

    if (dataArr.length === 0) {

        return (<div><h1>No Article, Click Populate</h1></div>);

    } else {

    dataArr.map(item => {

        //console.log(item);

        return (
            
            <div className="media">
                <div className="media-left">
                    <a target="_black" href="/something">
                    <img className="media-object" src="" alt="..."></img>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{item.title}</h4>
                    <h5>{item.date}</h5>
                    <p></p>
                    <button className="btn btn-success saveButton" data_value="">Save Article</button>
                </div>
            </div>

    )

    })
}

}

export default HomeItem;