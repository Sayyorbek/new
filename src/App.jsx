import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
// ? import img

import tat_logo from "./assets/tat_logo.png";
import people from "./assets/gif.gif";

// ? import aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { Home } from "./home/Home";
import { Courses } from "./courses/Courses";
import { About } from "./about/About";
import { ArLink } from "./arlink/ArLink";


// ? framer motion
import { motion } from "framer-motion";
import { StandardCourses } from "./standardCourses/StandardCourses";


function App() {
  let navigate = useNavigate();

  function homeFunc() {
    navigate("/home");
  }
  //  ? aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App" data-aos="fade-up">
      <Routes>
        <Route
          path="/"
          element={
            <div data-aos="zoom-in" className="content">
              <div className="head">
                <h1>Welcome !</h1>
                <img className="img1" src={tat_logo} alt="" />
                <br />
                <img className="img2" src={people} alt="people" />
                <br />
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={homeFunc}
                >
                  {" "}
                  Let`s start{" "}
                </motion.div>
              </div>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/ar" element={<ArLink />} />
        <Route path="/standardCourses" element={<StandardCourses/>}/>
      </Routes>

    </div>
  );
}

export default App;
