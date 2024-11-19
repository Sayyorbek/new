import React from "react";
import "./standardCourses.css";

// ? import icons
import { MdOutlineArrowLeft } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

// ? import images
import frontend from "../assets/st_courses.jpg";

import { useNavigate } from "react-router-dom";

export const StandardCourses = () => {
  let navigate = useNavigate();

  // ? functions
  function goBackFunc() {
    navigate(-1);
  }

  return (
    <>
     <div className="standard_courses_header">
            <a href="#" onClick={goBackFunc}>
              <MdOutlineArrowLeft />
            </a>
            <h1>Standard courses</h1>
            <div></div>
          </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="standard_courses" data-aos="fade-left">
          {/* ? standard courses header */}
          <div className="standard_background_and_padding">
            {/* courses cart one standard courses */}
            <div className="standard_courses_cart standard_courses_cart_one" data-aos="fade-up">
              <div className="space-between">
                <h3>Intensive courses</h3>
                <IoIosArrowForward />
              </div>
              <div className="standard_content_border">
                <img src={frontend} alt="i_c" />
                <div className="space-between standard_courses_between">
                  <div>
                    <h3>Introduction to Javascript</h3>
                    <p>Beginner</p>
                  </div>
                  <p>
                    <FaStar />
                    4.9
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
