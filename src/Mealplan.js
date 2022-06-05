import { days, mealTime } from "./constants/DietChart";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { useLocation } from "react-router-dom";

function Mealplan() {
  const location = useLocation();
  const dietchart = location.state?.data.dietChart;

  return (
    <Card sx={{ minWidth: 275 }}>
      {days.map((day) =>(
      <CardContent key={day}>
      <h3>{day.replace("_"," & ")}</h3>
      { mealTime.map((time) => (
          <div key={day+time}>
            <h3>{time}</h3>
            <p>{dietchart[day][time].diet}</p>
            <p>{dietchart[day][time].time}</p>
          </div>
        ))}
        </CardContent>)
      )}
    
        </Card>

      
   
  );
}

export default Mealplan;
