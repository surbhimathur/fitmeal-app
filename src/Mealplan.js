import { days, mealTime } from "./constants/DietChart";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

function Mealplan() {
  const location = useLocation();
  const dietchart = location.state?.data.dietChart;

  return (
    <section className="mealplan">
    <div className="mealplan_card">
     <h1 className="card_heading">Hi {location.state.name} !<br/><span id="eat_good">Eat Good Feel Good 😊 </span></h1>
     <h3 style={{color:"white",fontFamily:'Roboto',fontWeight:400,padding:"5px"}}>You need to consume {location.state.calories} calories per day to lose weight</h3>
      {days.map((day) =>(
      <div key={day}>
      <h2 className="days">{day.replace("_"," & ")}</h2>
      { mealTime.map((time) => (
          <div key={day+time} className="meal_detail">
            <h3 className="mealtime">{time}</h3>
            <p className="dietname">{dietchart[day][time].diet}</p>
            <p className="diettime">{dietchart[day][time].time}</p>
          </div>
        ))}
        </div>)
      )}
    
        </div> 
        <div className="imp_notes">
        <h2>Important Notes</h2>
        
          <p>🥝 Exercise Approx 30-45 Min In A Day, For At least 5 Times In A Week.</p>
          <p>🍇 Always Have A Gap of Minimum 1 Hr While Consuming Sabja/Chia Seeds and Sleeping.</p>
          <p>🍉 Take a Proper 8 Hrs Sleep.</p>
          
        </div>   
       <div className="back"><Link to="/" style={{textDecoration: 'none'}}> <Button variant="contained" style={{
           
           letterSpacing:"0.5px",
            fontFamily:'Roboto',
           fontSize: "16px",
         }}>Back to Home 🏠</Button></Link> </div>
        </section>
  );
}

export default Mealplan;
