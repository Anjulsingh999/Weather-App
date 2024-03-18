import React from "react";

const Humidity=(props)=>{
    return(
        <>
             <div className="info-box">
                <div className="title">
                    {props.humiditytitle}
                </div>
                <div className="info">
                    {props.humidityvalue}
                </div>
                <div className="more-info">
                    {" "}
                </div>
            </div>
        </>
    )
}

export default Humidity;