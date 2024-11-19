import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

// ? framer motion
import { motion } from "framer-motion";

// ? import icons
import { IoIosArrowForward } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


// ? import images
import about_image from "../assets/about_img.png";
import courses_image from "../assets/st_courses.jpg";
import AR_Link_image from "../assets/arLink.png";
import tat_logo from "../assets/tat_logo.png";


import { Button, TextField } from "@mui/material";

export const Home = () => {
  let navigate = useNavigate();

  // ? 
  function aboutFunc() {
    navigate("/about")
  }
  function coursesFunc() {
    navigate("/courses")
  }
  function arLinkFunc() {
    navigate("/ar")
  }


  return (
    // ? container
    <div className="home_container" data-aos="fade-left">
      {/* ? header_home */}
      <div className="header_home" data-aos="fade-up">
        <h3>Hello</h3>
        <h1>Khalikov</h1>
      </div>

      {/* ? main */}
      <div className="main_home">
        {/* main cart one  about */}
        <div className=" main_cart main_cart_one" data-aos="fade-up" onClick={aboutFunc}>
          <div className="space-between">
            <h3>About Us</h3>
            <IoIosArrowForward />
          </div>

          <img src={about_image} alt="" />
        </div>

        {/* ? main cart two  courses */}
        <div className=" main_cart main_cart_two" data-aos="fade-up" onClick={coursesFunc}>
          <div className="space-between">
            <h3>Our courses</h3>
            <IoIosArrowForward />
          </div>

          <img src={courses_image} alt="" />
        </div>

        {/* ? main cart three  AR Link */}
        <div className=" main_cart main_cart_Three" data-aos="fade-up" onClick={arLinkFunc}>
          <div className="space-between">
            <h3>AR Link</h3>
            <IoIosArrowForward />
          </div>

          <img src={AR_Link_image} alt="" />
        </div>

        {/* main cart four contact  */}

        <div className="main_contact" data-aos="fade-up">
          <div className="main_contact_header">
            <h3>Contact Us</h3>
            <p>Biz har doim sizning istaklaringizni qadirlaymiz.</p>
          </div>

          {/* ? inp and select */}
          <form className="contact">
            {/* ? input */}

            <TextField
              className="textField"
              id="fullname-basic"
              label="Full name"
              variant="outlined"
              type="text"
              name="fullname"
              placeholder="Full name"
              required
            />
            <br />
            <br />
            <TextField
              className="textField"
              id="phone-basic"
              label="Phone number"
              variant="outlined"
              type="tel"
              name="phone"
              placeholder="Phone_number"
              required
              pattern="[0-9]{9,13}"
              title="Please enter a valid phone number"
            />
            <br />
            <br />
            {/* ? select */}
            <select id="course" name="course" required>
              <option value="" disabled selected>
                Choose a course
              </option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Foundation">Foundation</option>
              <option value="SMM">SMM</option>
              <option value="Robototexnika">Robototexnika</option>
              <option value="Android">Android</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Computer Literacy">Computer Literacy</option>
              <option value="Computer Literacy Kids">
                Computer Literacy Kids
              </option>
            </select>
            <br />
            <br />
            {/*  click button */}
            <motion.div
                  className="box"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {" "}
                  send{" "}
                </motion.div>
          </form>
        </div>

        {/* ? main  location */}
        <div className="main_location" data-aos="fade-up">
          <div className="main_location_header">
            <h3>Our Location</h3>
            <p>Vokzal IT TAT</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.762151677482!2d66.92396777544492!3d39.67756460029653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19d54b324835%3A0xdf389d78adb91db2!2sIT%20TAT!5e0!3m2!1sru!2s!4v1730894013647!5m2!1sru!2s"
            width={`100%`}
            height={`300px`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>


      </div>

       {/* footer */}
       <footer data-aos="fade-up">
          <div className="footer-wrapper">
            <div className="footer_header">
              <img src={tat_logo} alt="it" />
              <div className="icons_bar">
                <a href="https://www.youtube.com/">
                  {" "}
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/it_tat_samarkand/">
                  <RiInstagramFill />
                </a>
                <a href="https://t.me/it_tat_qabul">
                  <FaTelegramPlane />
                </a>
                <a href="">
                  <FaFacebook />
                </a>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="space-between footer_elements">
              <h3>
                MISSION- Insoniyat va texnologiy orqali O`zbekiston yoshlarini
                dunyoga tanitish.
              </h3>
              <div className="footer_bottom">
                <div>
                  <h3>About</h3>
                  <p>Courses</p>
                  <p>AR Link</p>
                  <p>Team</p>
                </div>
                <div>
                  <h3>Subscription</h3>
                  <p>Information</p>
                  <p>Payment</p>
                  <p>Help</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};
