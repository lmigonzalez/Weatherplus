import React from "react";


import Header from "./Header";
import Search from "./Search";
import CityInf from "./CityInf";
import HeroFooter from "./HeroFooter";


const Hero = (props) =>{

	const { weatherData, getCity, temperaturePerHour, heroImg }= props




	return(
		<div className="hero" style={{backgroundImage: `url(${heroImg})`}}>
			<div className="overlay">
			<Header weatherData = {weatherData} temperaturePerHour = {temperaturePerHour}/>
			<Search getCity = {getCity} />
			<CityInf weatherData = {weatherData}  />
			<HeroFooter/>
			</div>

		</div>
	)
}



export default Hero