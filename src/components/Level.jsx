import React from "react";

const Level=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                Level
                </div>
                <div className="level-info">
                    Ground Level : {props.groundlevelvalue+"  hPa"}
                </div>
                <div className="level-info">
                    Sea Level : {props.sealevelvalue+"  hPa"}
                </div>
            </div>
        </>
    )
}

export default Level;