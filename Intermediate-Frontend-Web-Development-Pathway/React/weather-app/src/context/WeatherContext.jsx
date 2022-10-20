import { createContext, useState, useContext, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [cityName, setCityName] = useState("Bursa");
  const [weather, setWeather] = useState([]);

  const values = {
    weather,
    setWeather,
    cityName,
    setCityName,
  };

  useEffect(() => {
    const url = "https://api.openweathermap.org/data/2.5/";
    const key = "f42a47ef8b120f1d03550ac8986b8e5e";
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setWeather(data);        
      });   
  }, [cityName]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
