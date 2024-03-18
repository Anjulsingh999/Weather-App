import React from "react";
import sunImage from '../img/sun-fill.png';
import cloudImage from '../img/clouds.png';
import drizzleImage from '../img/drizzle.png';
import mistImage from '../img/mist.png';
import rainImage from '../img/rain.png';
import snowImage from '../img/snow.png';

var setimg;

const Weatherimage = (props) => {
    const weathertype=props.todayweathertype;

if (weathertype === "Clear") {
    setimg=sunImage;
}
else if (weathertype === "Clouds") {
    setimg=cloudImage;
}
else if (weathertype === "Drizzle") {
    setimg=drizzleImage;
}
else if (weathertype === "Mist") {
    setimg=mistImage;
}
else if (weathertype === "Rain") {
    setimg=rainImage;
}
else if (weathertype === "Snow") {
    setimg=snowImage;
}


    return (
        <>
            <div className="weather-image">
                <img src={setimg} />
            </div>
        </>
    )
}

export default Weatherimage;