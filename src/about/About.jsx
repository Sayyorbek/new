import React from "react";
import "./about.css";
// ? swiper 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import Swiper modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

// ? import icons
import { MdOutlineArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




// ? import img
import ar_image_one from "../assets/about_img.png"
import it_tat from "../assets/IT TAT.jpg"
import tat_logo from "../assets/tat_logo.png"
import { Navigate, useNavigate } from "react-router-dom";

export const About = () => {
  // ? navigate
  let navigate = useNavigate();

  // ? functions
  function goBackFunc() {
    navigate(-1);
  }

  return (
    // ? about container
    <div className="about_container" data-aos="fade-left">

      {/* ? about header */}
      <div className="about_header">
        
        <a href="#" onClick={goBackFunc}>
        <MdOutlineArrowLeft />
        </a>

        <h4>about page</h4>
        <div></div>
      </div>

      {/* ? main_about */}
      <div className="main_about">
          <img src={ar_image_one} alt="About" />
          <h3>About Our Team</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            mollitia ab voluptatem laboriosam corrupti qui culpa vero animi
            voluptatibus maiores sapiente, eum ratione in. Accusantium ipsa fuga
            qui fugit minus.
          </p>
        </div>

        {/* ? slider */}
        <div className="slider_about">
          <h3>
            Our Team Member
          </h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="peopleCart">
                  <img src={it_tat} alt="Team Member" />
                  <h3>Khalikov Sayyorbek</h3>
                  <p>Frontend Designer</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> 
        </div>

         {/* Swiper Slider 2 */}
        <div className="slider_about">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="peopleCart members">
                  <div className="people_img_bar">
                    <img src={it_tat} alt="Member" />
                    <div className="people_text_bar">
                      <h3>Khalikov Sayyorbek</h3>
                      <p>@alessandroveronezi</p>
                      {[...Array(5)].map((_, starIndex) => (
                        // <i key={starIndex} className="bx bxs-star"></i>
                        <FaStar />


                      ))}
                    </div>
                  </div>
                  <p>
                    While Corfu gives us the ability to shoot by the sea with an
                    amazing blue background full of light from the sky, Florina
                    gives us its gentle side.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> 

           {/* ? about  location */}
           <div className="about_location" data-aos="fade-up">
          <div className="about_location_header">
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

         {/* footer */}
       <footer className="about_footer" data-aos="fade-up">
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
