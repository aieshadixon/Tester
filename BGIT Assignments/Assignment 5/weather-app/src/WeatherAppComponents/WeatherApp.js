// WeatherApp.js
import React, { useState } from "react";
import './WeatherApp.css';
import SearchLocation from "./SearchLocation/SearchLocation";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import axios from "axios";

const WeatherApp = () => { // using the useState hook for changing data
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     
    axios // fetch weather data using an api key from the openweathermap website
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=dcc457560cc5829b7061f730bd1f1094"
      )
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });


  if (loading) {
    return <div>Loading weather data, please wait.</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div> 
      <SearchLocation onSearch={weatherData} /> 
      {error && <p>{error}</p>}
      {weatherData && <CurrentWeather data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
