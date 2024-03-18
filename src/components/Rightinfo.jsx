import React from "react";
import Windspeed from "./Windspeed";
import Humidity from "./Humidity";
import Pressure from './Pressure';
import Level from "./Level";
import Minmaxtemp from "./Minmaxtemp";
import Feeltemperature from "./Feeltemperature";
import Coordinate from "./Coordinate";
import Description from './Description';
import Visibility from './Visibility';

const Rightinfo = (props) => {
    return (
        <>
            <div className="right-container">
                <div className="right-inner-container">
                    <div className="group-boxes">
                        <Windspeed windtitle={"Wind"} todaywindspeed={props.currwindspeed + ' KM/h'} todaywinddirection={"Direction: " + props.currwinddirection + " º"} />
                        <Humidity humiditytitle={"Humidity"} humidityvalue={props.currhumidity+" %"}/>
                        <Pressure pressuretitle={"Pressure"} pressurevalue={props.currprssure+" hPa"}/>
                    </div>
                    <div className="group-boxes">
                        <Level sealevelvalue={props.currsealevel}  groundlevelvalue={props.currgroundlevel}/>
                        <Minmaxtemp mintempvalue={props.currmintemp} maxtempvalue={props.currmaxtemp}/>
                        <Feeltemperature  feeltempvalue={props.currfeeltemp}/>
                    </div>
                    <div className="group-boxes">
                    <Coordinate latvalue={props.currlat} lonvalue={props.currlon}/>
                    <Description descrivalue={props.currdescri}/>
                    <Visibility visibilityvalue={props.currvisibility}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightinfo;