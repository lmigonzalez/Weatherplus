import React, { useState, useEffect } from "react";
import moment from "moment";

import axios from "axios";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  const initialValue = [];
  
  const random = Math.floor(Math.random() * 10)
  const [weatherData, setWeatherData] = useState(initialValue);
  const [temperaturePerHour, setTemperaturePerHour] = useState(initialValue);
  const [city, setCity] = useState("tampa");

  const [heroImg, setHeroImg] = useState("https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDIzNjR8MHwxfHNlYXJjaHwxfHxtaWFtaXxlbnwwfHx8fDE2NTEwMzA3NDg&ixlib=rb-1.2.1&q=80&w=1080")

  useEffect(() => {
    currentWeather();
    temPerHour();
    
  }, [city]);

  function getCity(getCityInf) {
    setCity(getCityInf);
  }

  function currentWeather() {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: city },
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "1d18daafe8msha705f48890ca5c4p1ed968jsnf59eb7ea8127",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function temPerHour() {
    const date = moment().format('YYYY-MM-DD')
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/history.json",
      params: { q: city, dt: date, lang: "en" },
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "1d18daafe8msha705f48890ca5c4p1ed968jsnf59eb7ea8127",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setTemperaturePerHour(res.data.forecast.forecastday[0].hour);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getImage(){
    
    axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=5B8AY7vM1OspoJexKfkZdvlDrr3vYZwQ96RvOywKbSM`)
    .then(res=>{
      if(res.data.results.length >= 10){
        setHeroImg(res.data.results[2].urls.full)
      }else{
        setHeroImg(res.data.results[0].urls.full)
      }
    })
    .catch(err=>{
      console.log(err)
    })

  }

  getImage()

 

  return (
    <div className="app">
      <Hero
        weatherData={weatherData}
        getCity={getCity}
        temperaturePerHour={temperaturePerHour}
        heroImg = {heroImg}
      />
    </div>
  );
}

export default App;
