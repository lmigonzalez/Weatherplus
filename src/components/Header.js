import React from "react";
import sunny from "../img/sunny.png"

import moment from "moment";


const Header = (props) =>{
	const {weatherData, temperaturePerHour} = props

	const weekDay = moment().format('ddd');  
	const todayDate = moment().format("MMM D"); 
	

	return(
		
		<header className="header">
			<div className="today-inf">
				<div className="temperature">
					<h3>&nbsp;{weatherData.current.temp_f}°</h3>
					<p>{weekDay}/{todayDate}</p>
				</div>
				<div className="climate">
					<img src={weatherData.current.condition.icon} />
					<p>{weatherData.current.condition.text}</p>
				</div>
			</div>
			<div className="today-tem">
				<div className="tem-per-hour">
					<p>12AM</p>
					<img src={temperaturePerHour[0].condition.icon} />
					<p>{temperaturePerHour[0].temp_f}°</p>

				</div>

				<div className="tem-per-hour">
					<p>4AM</p>
					<img src={temperaturePerHour[4].condition.icon} />
					<p>{temperaturePerHour[4].temp_f}°</p>

				</div>

				<div className="tem-per-hour">
					<p>8AM</p>
					<img src={temperaturePerHour[8].condition.icon} />
					<p>{temperaturePerHour[8].temp_f}°</p>

				</div>

				<div className="tem-per-hour">
					<p>12PM</p>
					<img src={temperaturePerHour[12].condition.icon} />
					<p>{temperaturePerHour[12].temp_f}°</p>

				</div>

				<div className="tem-per-hour">
					<p>4PM</p>
					<img src={temperaturePerHour[16].condition.icon} />
					<p>{temperaturePerHour[16].temp_f}°</p>

				</div>

				<div className="tem-per-hour">
					<p>8PM</p>
					<img src={temperaturePerHour[20].condition.icon} />
					<p>{temperaturePerHour[20].temp_f}°</p>

				</div>

			</div>
		</header>

	)
}


export default Header;