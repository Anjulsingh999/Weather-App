import React from "react";

const Temperature = (props) => {
    return (
        <>
            <div className="curr-temperature">
                {Math.round(props.todaytemp)+"ºc"}
            </div>

        </>
    )
}

export default Temperature;