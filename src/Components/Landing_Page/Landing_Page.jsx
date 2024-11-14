import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./land.css";
import logo from "../../Assets/LPMV/logo2.png";
import banner from "../../Assets/LPMV/1.gif";
import  previous from "../../Assets/LPMV/Anokhya2.png";
import banner2 from "../../Assets/LPMV/banner.png";
import banner1 from "../../Assets/Events/final.mp4";
import { AuroraBackground } from "../ui/background";

export default function Homee() {
  const images = [
    "Anokhyalogo.jpg", // Replace with actual image paths
    "Anokhyalogo.jpg",
    "Anokhyalogo.jpg",
    "Anokhyalogo.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="body" id="Home">
          <div className="home_m">
            {/* Toggle Popup Button */}
            <button onClick={togglePopup} className="toggle-button">
              <img src={previous} alt="Round Image"/>
            </button>

            {/* Popup Modal */}
            <AnimatePresence>
              {isPopupOpen && (
                <motion.div
                  className="popup-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={togglePopup}
                >
                  <motion.div
                    className="popup-content"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                  >
                    <ul>
                      <li><video src={banner1} alt="video"  autoPlay controls/></li>
                    </ul>
                    <button onClick={togglePopup} className="close-button">
                      Close
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Rest of your component content */}
            <div className="home_m_top_left">
              <h3>TECH FEST 2024</h3>
              <p>EVENTS WORKSHOPS TECH-TALKS</p>
              <p style={{ color: "yellow" }}>22th - 23th MAY 2024</p>
            </div>
            <div className="home_m_logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="home_m_banner">
              <img src={banner} alt="Banner" />
            </div>
            <div className="home_m_banner1">
              <img src={banner2} alt="banner" />
            </div>
            <div className="home_m_buttons">
              <a href="/Anokhya.pdf">BROCHURE</a>
              <a href="#Events">EVENTS</a>
              <a href="#Timeline">TIMELINE</a>
            </div>
            <div className="home_m_info">
              <p style={{ color: "white" }}>Brought to you by</p>
              <h4 style={{ textAlign: "center" }}>
                DAYANANDA SAGAR COLLEGE OF ENGINEERING
              </h4>
              <h5 style={{ textAlign: "center", color: "white" }}>
                Department of Artificial Intelligence & Machine Learning
              </h5>
            </div>
            <div className="home_m_links">
              <div>
                <a href="https://www.instagram.com/_anokhya?igsh=MTR5Y3lhejA1NHZpMw==">
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
              <div>
                <a href="https://discord.com/invite/Mg6Re2Kt">
                  <i
                    className="fa-brands fa-discord"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
              <div>
                <a href="mailto:techfest@anokhya.com">
                  <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
