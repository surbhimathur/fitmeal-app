import { Link } from '@mui/material';
import React from "react";
import Userform from "./Userform";
import hero from "../src/hero.png";

function Homepage() {
  return (
    <div className="home">
      <div className="hero_box">
      <div className="title">
        <h1 >Food for a Healthy Life</h1>
        <Link to="/userform" id="link"><p>Get a personalized diet chart</p></Link>
</div>
        <div className="hero_image">
          <img src={hero} alt="hero_image" />
        </div>
      </div>
      <Userform />
    </div>
  );
}

export default Homepage;
