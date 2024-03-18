import React from "react";

const  Windspeed= (props) => {
    return (
        <>
            <div className="info-box">
                <div className="title">
                    {props.windtitle}
                </div>
                <div className="info">
                    {props.todaywindspeed}
                </div>
                <div className="more-info">
                    {props.todaywinddirection}
                </div>
            </div>
        </>
    )
}

export default Windspeed;