import React from "react";
import "./course.css";
import { useNavigate } from "react-router-dom";

// ? import icons
import { MdOutlineArrowLeft } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

// ? import images courses
import standard_courses from "../assets/st_courses.jpg";
import intensive_courses from "../assets/intinsiv.jpg";

export const Courses = () => {
  let navigate = useNavigate();

  // ? functions
  function goBackFunc() {
    navigate(-1);
  }

  function standadCoursesFunc() {
      navigate("/standardCourses")
  }

  return (
    // ? courses container
    <div className="courses_container" data-aos="fade-left">
      {/* ? courses header */}
      <div className="courses_header">
        <a href="#" onClick={goBackFunc}>
          <MdOutlineArrowLeft />
        </a>

        <h1>Courses</h1>
        <a href="#">
          <FaBell />
        </a>
      </div>
      {/* ? background and padding  */}
      <div className="background_and_padding">

      {/* courses cart one  standard courses */}
      <div className=" courses_cart courses_cart_two" data-aos="fade-up" onClick={standadCoursesFunc}>
        <div className="space-between">
          <h3>Intensive courses</h3>
          <IoIosArrowForward />
        </div>
        <div className="content_border">
          <img src={standard_courses} alt="i_c" />
          <div className="space-between courses_between">
            <div>
              <h3>Introduction to Javascript</h3>
              <p>Beginner</p>
            </div>
            <p>
              {" "}
              <FaStar />
              4.9
            </p>
          </div>
        </div>

      </div>

      {/* courses cart two  intensive courses */}
      <div className=" courses_cart courses_cart_two" data-aos="fade-up">
        <div className="space-between">
          <h3>Intensive courses</h3>
          <IoIosArrowForward />
        </div>
        <div className="content_border">
          <img src={intensive_courses} alt="i_c" />
          <div className="space-between courses_between">
            <div>
              <h3>Introduction to Javascript</h3>
              <p>Beginner</p>
            </div>
            <p>
              {" "}
              <FaStar />
              4.9
            </p>
          </div>
        </div>
      </div>

      </div>



    </div>
  );
};
