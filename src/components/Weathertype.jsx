import React from "react";

const Weathertype = (props) => {
    return (
        <>
            <div className="weather-type">
                {props.todayweathertype}
            </div>

        </>
    )
}

export default Weathertype;