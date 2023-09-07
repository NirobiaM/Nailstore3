import React from 'react'

const Footer = () => {
  return (
    <div className = "text-center">
      <p> 555-555-5555</p>
      <p> fake@email.com</p>
      <div className= "flex justify-center">
      <a href ="instagram.com">
        <img src = "/instagramIcon.png" width ="20px" height="20px"/>
      </a>
      </div>
    </div>
  )
}

export default Footer;
