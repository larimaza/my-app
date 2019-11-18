import React from "react";

const WeatherController = ({ weather, changeWeather }) => (
  <>
    <p>Current weather is {weather}.</p>
    <button onClick={() => changeWeather("Clear")}>Make it clear</button>
    <button onClick={() => changeWeather("Cloudy")}>Make it cloudy</button>
    <button onClick={() => changeWeather("Rain")}>Make it rain</button>
    <button onClick={() => changeWeather("Snow")}>Make it snow</button>
  </>
);

export default WeatherController;
