import React, {useState} from "react";

import { IoLocationSharp } from "react-icons/io5";

const CityInf = (props) => {

const {weatherData} = props
// console.log(weatherData)


  return (
    <div className="city-container">
      <div className="city-inf">
        <div className="city-name">
          <IoLocationSharp className="city-icon"/>
          <h3>{weatherData.location.name}, {weatherData.location.region}</h3>
        </div>
        <div className="inf">
          <p>Humidity</p>
          <p>{weatherData.current.humidity}%</p>
        </div>
        <div className="inf">
          <p>Visibility</p>
          <p>{weatherData.current.vis_miles} mi</p>
        </div>
        <div className="inf">
          <p>Wind</p>
          <p>{weatherData.current.wind_mph} mph</p>
        </div>
        <div className="inf">
          <p>Feels like</p>
          <p>{weatherData.current.feelslike_f}°</p>
        </div>
        <div className="inf">
          <p>Pressure</p>
          <p>{weatherData.current.pressure_in} inHg</p>
        </div>
      </div>
    </div>
  );
};

export default CityInf;
