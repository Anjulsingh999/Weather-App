import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Weatherinfo from "./components/Weatherinfo";
import Rightinfo from "./components/Rightinfo";

const App = () => {

    const [day, setday] = useState(null);
    const [month, setmonth] = useState(null);
    const [year, setyear] = useState(null);
    const [dayname, setdayname] = useState(null);
    const [hours, sethours] = useState(null);
    const [minutes, setminutes] = useState(null);
    const [seconds, setseconds] = useState(null);
    const [temperature, settemperature] = useState(null);
    const [weathertype, setwethertype] = useState(null);
    const [windspeed, setwindspeed] = useState(null);
    const [winddirction, setwinddirction] = useState(null);
    const [humidity, sethumidity] = useState(null);
    const [pressure, setpressure] = useState(null);
    const [sealevel, setsealevel] = useState(null);
    const [groundlevel, setgroundlevel] = useState(null);
    const [mintemp, setmintemp] = useState(null);
    const [maxtemp, setmaxtemp] = useState(null);
    const [feeltemp, setfeeltemp] = useState(null);
    const [lon, setlon] = useState(null);
    const [lat, setlat] = useState(null);
    const [descri, setdescri] = useState(null);
    const [visibility, setvisibility] = useState(null);
    const [errormsg, seterrormsg] = useState("none");
    const [cityName, setcityName] = useState(null);
    const [typename,settypename]=useState("none")


    const inputEvent = (event) => {

        if(event.target.value.toLowerCase().trim()==='prayagraj')
        {
            setcityName("Allahabad")
        }
        else{
            setcityName(event.target.value);
        // console.log("likh rahe hi");
        }
    }

    var city = cityName;

    if(cityName==="prayagraj")
    {
        city="Allahabad";
    }


    const start_app = () => {

        async function getWeather() {

            const temp_apikey = "7dd96a1570b2832a6a06a037004919fd";

            var city = cityName;

            const temp_apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
            // console.log("call getweather");
            let weather_data = await fetch(temp_apiurl + city + `&appid=${temp_apikey}`);
            let output = await weather_data.json();

            if (output.cod === '404') {
                // console.log("error hai");
                seterrormsg("block");
            }
            else {
                settemperature(output.main.temp);
                setwethertype(output.weather[0].main);
                setwindspeed(output.wind.speed);
                setwinddirction(output.wind.deg);
                sethumidity(output.main.humidity)
                setpressure(output.main.pressure);
                setsealevel(output.main.sea_level);
                setgroundlevel(output.main.grnd_level);
                setmintemp(output.main.temp_min);
                setmaxtemp(output.main.temp_max);
                setfeeltemp(output.main.feels_like);
                setlon(output.coord.lon);
                setlat(output.coord.lat);
                setdescri(output.weather[0].description);
                setvisibility(output.visibility);
                settypename("block");
                seterrormsg("none");

                // console.log(output);

            }

        }

        getWeather();




        async function getworldTime() {
            // console.log("call time");

            const time_apikey = "oggIND/UyizwkKf2i21fkw==Wy0nVReEBFj2q1HA";

            const options = {
                method: "GET",
                headers: { 'X-Api-Key': time_apikey }
            };

            var city = cityName;
            const time_apiurl = "https://api.api-ninjas.com/v1/worldtime?city=" + city;

            const response = await fetch(time_apiurl, options);
            const data = await response.json();

            // console.log(data);
            setday(data.day);
            setmonth(data.month);
            setyear(data.year);
            setdayname(data.day_of_week);
            sethours(data.hour);
            setminutes(data.minute);
            setseconds(data.second);
            
        }

        getworldTime();


    }


    return (
        <>
            <div className="container">
                <div className="left-container">
                    <div  className="showmsg">
                    <div className="search-area">
                        <div className="search-box">
                            <input type="text" placeholder="Enter city name" onChange={inputEvent} value={cityName}></input>
                        </div>
                        <div className="search-btn">
                            <button onClick={start_app}><SearchIcon /></button>
                        </div>
                    </div>
                    <div className="errormsg" style={{display:errormsg}}>Invalid city name!</div>
                    </div>
                    <Weatherinfo currday={day} currmonth={month} curryear={year} currdayname={dayname} currhour={hours} currminutes={minutes} currsecond={seconds} cityinput={city} currtemp={temperature} currweathertype={weathertype} displaytype={typename} />
                </div>

               <Rightinfo currwindspeed={windspeed} currwinddirection={winddirction} currhumidity={humidity} currprssure={pressure} currsealevel={sealevel} currgroundlevel={groundlevel} currmintemp={mintemp} currmaxtemp={maxtemp} currfeeltemp={feeltemp} currlat={lat} currlon={lon} currdescri={descri} currvisibility={visibility} displaytype={typename}/>
               </div>
        </>
    )
}
export default App;