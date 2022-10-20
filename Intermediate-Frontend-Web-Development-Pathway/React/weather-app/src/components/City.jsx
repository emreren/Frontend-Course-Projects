import React from "react";

import { useWeatherContext } from "../context/WeatherContext";

function City() {
  const { setCityName } = useWeatherContext();

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="header">
      <h1>Hava Durumu</h1>
      <form>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}

export default City;
