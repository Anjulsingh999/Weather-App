import React from "react";

const Visibility=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                    Visibility
                </div>
                <div className="info">
                    {props.visibilityvalue+" Meter"}
                </div>
                <div className="more-info">
                    {" "}
                </div>
            </div>
        </>
    )
}

export default Visibility;