import React from "react";

const Prssure=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                    {props.pressuretitle}
                </div>
                <div className="info">
                    {props.pressurevalue}
                </div>
                <div className="more-info">
                    {" "}
                </div>
            </div>
        </>
    )
}

export default Prssure;