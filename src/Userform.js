import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Mealplan from "./Mealplan";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from 'axios';

function Userform() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [diet, setDiet] = useState("");
  const [activity, setActivity] = useState("");
 
  const navigate = useNavigate();

  let totalCalories;
  let burncalories;
  let bmr;
  const generatediet = async () => {
    console.log(name, age, height, weight, gender, diet, activity);
    if(name && age && height && weight && gender && diet && activity)
    {
    if (gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      totalCalories= bmr * activity;
      burncalories=Math.round(totalCalories)-500;
      console.log("total calories of male is", totalCalories);
      console.log("burncalories",burncalories);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      totalCalories= bmr * activity;
      burncalories=Math.round(totalCalories)-500;
      console.log("total calories of female is", totalCalories);
      console.log("burncalories",burncalories);
    }
     await getDietChart(burncalories,diet);
  }
  else{
    alert("Please fill all the fields");
  }
    //  setName("");
    //  setAge("");
    //  setWeight("");
    //  setHeight("");
    //  setGender(""); 
    //  setDiet("");
    //  setActivity("");
  };

  const getDietChart=async(calories,preference)=>{
    const {data}= await axios.get(`https://fitmealbackend.herokuapp.com/dietchart?calorie=${calories}&preference=${preference}`)
   
      navigate("/mealplan", {state:{data,name,calories}})
      
  }
 
  
  return (
    <section className="user_section">
      <div className="user_form" id="detailsform">
        <TextField
          label="Name"
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
        <TextField
          label="Age"
          variant="standard"
          type="number"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Weight in kgs"
          variant="standard"
          type="number"
          fullWidth
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          label="Height in cms"
          variant="standard"
          type="number"
          fullWidth
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <FormControl fullWidth>
        
          <InputLabel style={{lineHeight:"2.4rem"}}>Activity</InputLabel> 
          <Select
            value={activity}
            label="Activity"
            onChange={(e) => setActivity(e.target.value)}
           
          >
            <MenuItem value={1.2}>
              Sedentary: Little or no exercise
            </MenuItem>
            <MenuItem value={1.375}>
              Lightly Active: exercise 1-3 days/week
            </MenuItem>
            <MenuItem value={1.55}>
              Moderately Active: exercise 3-5 days/week
            </MenuItem>
            <MenuItem value={1.725}>
              Very Active: exercise 5-6 days/week
            </MenuItem>
            <MenuItem value={1.9}>
              Extra Active: exercise 6-7 days/week
            </MenuItem>
          </Select>
        </FormControl>
        <div className="gender">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            className="radiobuttons"
            name="row-radio-buttons-group"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </div>

        <div className="gender" id="diet_type">
          <FormLabel>Diet Preferences</FormLabel>
          <RadioGroup
            row
            className="diet_buttons"
            name="row-radio-buttons-group"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          >
            <FormControlLabel value="Veg" control={<Radio />} label="Veg" />
            <FormControlLabel
              value="Non-Veg"
              control={<Radio />}
              label="Non-Veg"
            />
          </RadioGroup>
        </div>
   
        <Button
          variant="contained"
          style={{
           letterSpacing:"0.5px",
            fontFamily:'Roboto',
            fontSize: "16px",
            marginTop: "15px",
          
          }}
          onClick={generatediet}
        >
          Generate Diet Chart
        </Button>
       
      </div>
    </section>
  );
}

export default Userform;
