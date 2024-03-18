import React from "react";

const Temperature = (props) => {
    return (
        <>
            <div className="curr-temperature">
                {props.todaytemp}
            </div>

        </>
    )
}

export default Temperature;