import React from "react";
import Weatherimage from "./Weatherimage";
import Temperature from "./Temperature";
import Weathertype from "./Weathertype";
import Line from "./Line";
import Todaydate from "./Todaydate";
import Address from "./Address";

const Weatherinfo = (props) => {
    return (
        <>
            <Weatherimage todayweathertype={props.currweathertype} />
            <Temperature  todaytemp={props.currtemp} />
            <Weathertype todayweathertype={props.currweathertype} />
            <Line />
            <Todaydate todayday={props.currday} todaymonth={props.currmonth} todayyear={props.curryear}  todaydayname={props.currdayname}  todayhours={props.currhour} todayminutes={props.currminutes} todayseconds={props.currsecond} />
            <Address currcity={props.cityinput}/>
        </>
    )
}

export default Weatherinfo;