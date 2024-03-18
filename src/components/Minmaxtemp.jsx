import React from "react";

const Minmaxtemp=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                Temperature
                </div>
                <div className="level-info">
                    Min Temp : {props.mintempvalue+" ºc"}
                </div>
                <div className="level-info">
                    Max Temp : {props.maxtempvalue+" ºc"}
                </div>
            </div>
        </>
    )
}

export default Minmaxtemp;