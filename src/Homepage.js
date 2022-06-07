import Button from "@mui/material/Button";
import { HashLink } from "react-router-hash-link";
import React from "react";
import Userform from "./Userform";
import fitlogo from "../src/fitlogo.png";
import hero from "../src/hero.png";

function Homepage() {
  return (
    <div className="home">
      <div className="hero_box">
        <div className="title">
        <img src={fitlogo} className="logo" />
          <h1>Train Your <span id="crave">Body To Crave</span> Healthy Food</h1>
          {/* here Hashlink is used to scroll on same page by giving id of userform.js file  */}
          <HashLink to="#detailsform" id="link" smooth>       
            <Button variant="contained" id="healthy" size="small">Ready to be healthy</Button>
          </HashLink>
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
