import React, { useState } from "react";

const Todaydate = (props) => {

 
    return (
        <>
            <div className="todays-date">
                <div className="currdate">
                    {props.todayday} / {props.todaymonth} / {props.todayyear}
                </div>
                <div className="currtime">
                   {props.todayhours}:{props.todayminutes}:{props.todayseconds}
                </div>
                <div className="currday">
                    {props.todaydayname}
                </div>

            </div>

        </>
    )
}

export default Todaydate;