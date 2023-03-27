import React from "react";
import "./DateTime.css"

const DateTime=()=>{

var showDate=new Date();
var displayTodayDate=showDate.getDate()+'/'+(showDate.getMonth()+1)+'/'+showDate.getFullYear();
var dt=showDate.toDateString();
var displayTime=showDate.toLocaleTimeString();

  return (
    <div className='Datetime'>
        <div className='date'>{dt}</div>
        <div className='time'>{displayTime}</div>
    </div>
  )
}

export default DateTime