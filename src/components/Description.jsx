import React from "react";

const Description=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                Description
                </div>
                <div className="info-descri">
                    {props.descrivalue}
                </div>
                <div className="more-info">
                    {" "}
                </div>
            </div>
        </>
    )
}

export default Description;