import React, { useState, useEffect } from "react";
import moment from "moment";

import axios from "axios";
import Hero from "./components/Hero";
import PreHero from "./components/PreHero";
import News from "./components/News";
import Footer from "./components/Footer";

import {getCountry} from './components/Countries.js/CountryList'

import "./App.css";

function App() {
  const initialValue = [];
  
  const [weatherData, setWeatherData] = useState(initialValue);
  const [temperaturePerHour, setTemperaturePerHour] = useState(initialValue);
  const [city, setCity] = useState("");
  const [news, setNews] = useState(initialValue)

  const [heroImg, setHeroImg] = useState("https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDIzNjR8MHwxfHNlYXJjaHwxfHxtaWFtaXxlbnwwfHx8fDE2NTEwMzA3NDg&ixlib=rb-1.2.1&q=80&w=1080")

  useEffect(() => {
    currentWeather();
    temPerHour();
    getImage()
  }, [city]);

// console.log(weatherData)

  function getCity(getCityInf) {
    setCity(getCityInf);
  }

  function currentWeather() {
    if(city.length >= 1){
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
          getNews()
         
        })
        .catch((error) => {
          console.error(error);
        });
    }
   
  }

  function temPerHour() {
    const date = moment().format('YYYY-MM-DD')
    
    if(city.length >= 1){
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
    
  }

  function getNews(){

    const country = getCountry(weatherData.location.country)

    // const options = {
    //   method: 'GET',
    //   url: 'https://google-news1.p.rapidapi.com/geolocation',
    //   params: {geo: city, country: country, lang: 'en', limit: '50'},
    //   headers: {
    //     'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    //     'X-RapidAPI-Key': '1d18daafe8msha705f48890ca5c4p1ed968jsnf59eb7ea8127'
    //   }
    // };
    
    // axios.request(options).then(function (response) {
    //   setNews(response.data);
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }
  
  function getImage(){
 
    axios.get(`https://api.unsplash.com/search/photos?query=${city}&client_id=5B8AY7vM1OspoJexKfkZdvlDrr3vYZwQ96RvOywKbSM`)
    .then(res=>{
        setHeroImg(res.data.results[0].urls.full)
    })
    .catch(err=>{
      console.log(err)
    })

  }

  // getImage()

 

  return (
    <div className="app">
      {
        weatherData.length === 0 && temperaturePerHour.length === 0?
        <PreHero getCity={getCity}/>:
       <Hero
        weatherData={weatherData}
        getCity={getCity}
        temperaturePerHour={temperaturePerHour}
        heroImg = {heroImg}
      /> 
    }
      <News news = {news}/>: 
    {/* {
      !weatherData.length === 0? 
      <News className='news-container' news = {news}/>: 
      <> </>

    } */}

    <Footer/>
      
    </div>
  );
}

export default App;
