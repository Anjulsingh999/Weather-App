import React from "react";

const Coordinate=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                Coordinate
                </div>
                <div className="level-info">
                Latitude : {props.latvalue+" º"}
                </div>
                <div className="level-info">
                Longitude : {props.lonvalue+" º"}
                </div>
            </div>
        </>
    )
}

export default Coordinate;