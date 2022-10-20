import {useEffect} from "react";
import { useWeatherContext } from "../context/WeatherContext";

function Forecast() {
  const { weather } = useWeatherContext();

  useEffect(() => {
    const contentDom = document.querySelector(".content");
    contentDom.innerHTML=`
    <div className="city">${weather.name}, ${weather.sys.country}</div>
    <div className="temp">${Math.round(weather.main.temp)}°C</div>
    <div className="desc">${weather.weather[0].description}</div>
    <div className="minmax">${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C</div>
    `


  }, [weather]);
  
  return (
    <div className="content">
      {/* <div className="city">{`${weather.name}, ${weather.sys.country}`}</div>
      <div className="temp">{`${Math.round(weather.main.temp)}°C`}</div>
      <div className="desc">{`${weather.weather[0].description}`}</div>
      <div className="minmax">{`${Math.round(
        weather.main.temp_min
      )}°C/${Math.round(weather.main.temp_max)}°C`}</div> */}
    </div>
  );
}

export default Forecast;
