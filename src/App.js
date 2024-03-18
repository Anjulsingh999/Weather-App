import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Weatherinfo from "./components/Weatherinfo";
import Rightinfo from "./components/Rightinfo";

const App = () => {

    const [day, setday] = useState("");
    const [month, setmonth] = useState("");
    const [year, setyear] = useState("");
    const [dayname, setdayname] = useState("");
    const [hours, sethours] = useState("");
    const [minutes, setminutes] = useState("");
    const [seconds, setseconds] = useState("");
    const [temperature,settemperature]=useState("");
    const [weathertype,setwethertype]=useState("");
    const [windspeed,setwindspeed]=useState("");
    const [winddirction,setwinddirction]=useState("");
    const [humidity,sethumidity]=useState("");
    const [pressure,setpressure]=useState("");
    const [sealevel,setsealevel]=useState("");
    const [groundlevel,setgroundlevel]=useState("");
    const [mintemp,setmintemp]=useState("");
    const [maxtemp,setmaxtemp]=useState("");
    const [feeltemp,setfeeltemp]=useState("");
    const [lon,setlon]=useState("");
    const [lat,setlat]=useState("");
    const [descri,setdescri]=useState("");
    const [visibility,setvisibility]=useState("");
    const [name,setName]=useState("");
    const [cityName,setcityName]=useState("");



    const inputEvent=(event)=>{
        setName(event.target.value);
      
    }


    const time_apikey = "xnzeAVUQXNs1rjVvCB2cuw==WDaJFVWB6Jkacaq5";
    const temp_apikey = "7dd96a1570b2832a6a06a037004919fd";

    const options = {
        method: "GET",
        headers: { 'X-Api-Key': time_apikey }
    };

   const city = cityName;
    
        const time_apiurl = "https://api.api-ninjas.com/v1/worldtime?city=" + city;
    
        const temp_apiurl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      
    const start_app=()=>{
      

        setcityName(name);
        
        async function getWeather() {

            let weather_data = await fetch(temp_apiurl + city + `&appid=${temp_apikey}`);
            let output = await weather_data.json();

            if(output.cod === '404')
            {
                console.log("error");
            }
            else
            {
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
        
                console.log(output);
                
            }
    
        }
    
        getWeather();
    
    
    
    
        async function getworldTime() {
            const response = await fetch(time_apiurl, options);
            const data = await response.json();
    
            console.log(data);
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
                    <div className="search-area">
                        <div className="search-box">
                            <input type="text" placeholder="Enter city name" onChange={inputEvent} value={name}></input>
                        </div>
                        <div className="search-btn">
                            <button onClick={start_app}><SearchIcon /></button>
                        </div>
                    </div>
                    <Weatherinfo currday={day} currmonth={month} curryear={year} currdayname={dayname} currhour={hours} currminutes={minutes} currsecond={seconds} cityinput={city} currtemp={temperature} currweathertype={weathertype} />
                </div>

                <Rightinfo currwindspeed={windspeed} currwinddirection={winddirction} currhumidity={humidity} currprssure={pressure} currsealevel={sealevel} currgroundlevel={groundlevel} currmintemp={mintemp} currmaxtemp={maxtemp} currfeeltemp={feeltemp}  currlat={lat} currlon={lon} currdescri={descri} currvisibility={visibility}/>
            </div>
        </>
    )
}
export default App;