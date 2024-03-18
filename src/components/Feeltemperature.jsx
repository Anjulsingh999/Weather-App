import React from "react";

const Feeltemperature=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                    Feel Like
                </div>
                <div className="info">
                    {props.feeltempvalue+" ºc"}
                </div>
                <div className="more-info">
                    {" "}
                </div>
            </div>
        </>
    )
}

export default Feeltemperature;