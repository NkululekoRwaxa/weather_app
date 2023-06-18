import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp(){
    const[cityName, setCityName] = useState("");
    const[weatherData, setWeatherData] = useState({});
    
    const changeCityInput = (e) =>{
        setCityName(e.target.value);
    }

    const fetchWeatherAPI = async() =>{
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2b67da829432115bdfb69d066e583eb5&units=metric`;
        const resp = await fetch(api_url);
        const resp_json = await resp.json();
        setWeatherData(resp_json);
    }

    let handleMouseOut = (e)=>{
        fetchWeatherAPI();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h3 className="text-center text-success">React Weather App</h3>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter city name..."
                        onChange={changeCityInput}
                        onMouseOut={handleMouseOut}
                        value={cityName}
                        />
                    </div>
                    <WeatherInfo cityName={cityName} weatherData={weatherData} />
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;