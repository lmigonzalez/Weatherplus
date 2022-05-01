import React, {useState, useEffect} from "react";

import {ButtonGroup, Button} from 'react-bootstrap';
import { BsFillClockFill } from "react-icons/bs";


const HeroFooter = (props) => {
  const {weatherData} = props
  let longLocalTime = weatherData.location.localtime.split(' ')[1]
  let local24Hour = Number(longLocalTime.split(':')[0])
  let shortTime = longLocalTime
  if(local24Hour > 12){
    local24Hour = local24Hour - 12;
    shortTime = `${local24Hour}: ${longLocalTime.split(':')[1]}`
  }

  // console.log(shortTime)

  return (
    <div className="hero-footer">
      <ButtonGroup className="btn-group">
        <Button>°C</Button>
        <Button>°F</Button>
      </ButtonGroup>
	  <div className="time-content">
		  <BsFillClockFill/>
		  <p>{shortTime}</p>
	  </div>
    </div>
  );
};

export default HeroFooter;
