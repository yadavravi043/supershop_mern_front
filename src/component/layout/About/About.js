import React from "react";
import "./aboutSection.css";
import {Typography, Avatar } from "@material-ui/core";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedinIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>


          <div>
          <span>
              This is an E-commerece website(Supershop) made by using MERN stack where user can buy and checkout product.
              And add review and rating for the product. 
            </span>
          <Avatar
              style={{ width: "20vmax", height: "20vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkg26aryu/image/upload/v1682443658/samples/imagecon-group.jpg"
              alt="Website Logo"
            />
          </div>

          <div>
          <h1>Designed and Developed By</h1>


            <Avatar
              style={{ width: "15vmax", height: "15vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkg26aryu/image/upload/v1682443651/samples/people/smiling-man.jpg"
              alt="Founder"
            />
            <h2>Ravi Kumar</h2>
          
          
          </div> 
        </div>
      </div>
    </div>
  );
};

export default About;
