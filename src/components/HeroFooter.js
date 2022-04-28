import React, {useState, useEffect} from "react";

import moment from "moment";


import {ButtonGroup, Button} from 'react-bootstrap';
import { BsFillClockFill } from "react-icons/bs";


const HeroFooter = () => {

const time = moment().format('h:mm:ss A')

const [clock, setClock] = useState(time)

// useEffect(()=>{
//   setInterval(() => {
//     setClock(time);
//   }, 1000);
// })



  return (
    <div className="hero-footer">
      <ButtonGroup className="btn-group">
        <Button>°C</Button>
        <Button>°F</Button>
      </ButtonGroup>
	  <div className="time-content">
		  <BsFillClockFill/>
		  <p>{time}</p>
	  </div>
    </div>
  );
};

export default HeroFooter;
