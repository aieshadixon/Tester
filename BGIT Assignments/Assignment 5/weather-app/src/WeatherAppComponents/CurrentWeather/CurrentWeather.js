// This component is for displaying the weather the weather conditions
import React, { useState} from "react";

const CurrentWeather = ({ temperature, humidity, description }) => {
  const [condition, setCondition] = useState(null);

  return (
    <div className="weather-info">
      <h2>Weather Information</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default CurrentWeather;
