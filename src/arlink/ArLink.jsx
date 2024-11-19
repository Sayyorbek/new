import React from 'react'
import "./arlink.css"

// ? import icons
import { MdOutlineArrowLeft } from "react-icons/md";


import { useNavigate } from 'react-router-dom';

// ? import images
import arlink_image_one from "../assets/arLink_img_1.png"
import arlink_image_two from "../assets/arLink.png"
import arlink_image_three from "../assets/arLink_img_1.png"


export const ArLink = () => {

  let navigate = useNavigate();

  // ? functions
  function goBackFunc() {
    navigate(-1);
  }

  return (
    // ? arLink container
    <div className='arLink_container' data-aos="fade-left">

      {/* ? arLink header */}

        <div className="arLink_header">
        <a href="#" onClick={goBackFunc}>
        <MdOutlineArrowLeft />
        </a>

        <h4>about page</h4>
        <div></div>
        </div>

        <div className="main_arLink">
          <img src={arlink_image_one} alt="img_one" />
          <img src={arlink_image_two} alt="img_one" />
          <img src={arlink_image_three} alt="img_one" />

        </div>
    </div>
  )
}
