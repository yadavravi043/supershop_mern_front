import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="leftFooter">
      <h1><a href='/'>Home</a></h1>
      <h1><a href='/products'>Products</a></h1>
      <h1><a href='/about'>About</a></h1>
      <h1><a href='/contact'>Contact</a></h1>
      </div>

      <div className="midFooter">
        <h1>ESHOP</h1>
        <p>High Quality is our first priority</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/_yadav_ravi_/">
        <InstagramIcon  className="instagramSvgIcon" />
        </a>
        <a href="https://www.youtube.com/@TheTechGamma">
        <YouTubeIcon className='utubeSvgIcon'/>
        </a>
        <a href="https://www.linkedin.com/in/ravi-yadav-8184441a6/">
        <LinkedInIcon className='linkedSvgIcon'/>
        </a>
      </div>

    </footer>
  );
};

export default Footer