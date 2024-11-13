"use client";

import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import "./About_us.css";
import { useEffect, useRef, useState } from "react";
import { HyperText } from "../ui/textEffect";

export function LampDemo() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (deadline) => {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);
    return { total, days, hours, minutes, seconds };
  };

  const startTimer = (deadline) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        `${days > 9 ? days : "0" + days}:${hours > 9 ? hours : "0" + hours}:${
          minutes > 9 ? minutes : "0" + minutes
        }:${seconds > 9 ? seconds : "0" + seconds}`
      );
    } else {
      clearInterval(Ref.current); // Clear the interval when the countdown is complete
      setTimer("00:00:00:00"); // Reset the timer display
    }
  };

  const clearTimer = (deadline) => {
    setTimer("00:00:00:00"); // Reset the timer display
    if (Ref.current) clearInterval(Ref.current); // Clear any existing interval
    const id = setInterval(() => {
      startTimer(deadline);
    }, 1000);
    Ref.current = id; // Store the interval ID
  };

  useEffect(() => {
    const deadline = getDeadTime(); // Set the deadline
    clearTimer(deadline);
    return () => clearInterval(Ref.current);
  }, []);

  const getDeadTime = () => {
    return new Date("2024-11-22T00:00:00+05:30"); // 8th November 2024, 00:00:00 IST
  };

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: -130 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-38 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="about_us" id="About">
          <div className="abs_con">
            <div className="abs_body">
              <div className="abs_timer">
                <h2 className="time_text">TECH</h2>
                <h2 className="time_text">
                  <div className="container">
                    <div className="stack" style={{ "--stacks": "3" }}>
                      <span style={{ "--index": "0" }}>AWESOMENESS</span>
                      <span style={{ "--index": " 1" }}>AWESOMENESS</span>
                      <span style={{ "--index": "2" }}>AWESOMENESS</span>
                    </div>
                  </div>
                </h2>
                <h2 id="time">{timer}</h2>
                <div id="label">
                  <p>DAYS</p> <p>HOURS</p> <p>MINUTES</p>
                  <p>SECONDS</p>
                </div>
              </div>
              <div className="abs_txt">
                <div className="abs_txt_con">
                  <h1 className="heading">
                    {" "}
                    <HyperText text="ANOKHYA TECH-FEST" />
                  </h1>
                  <div className="box">
                    <div className="abs_abs">
                      <strong>
                        {" "}
                        <p>
                          Anokhya is a 2-Day Tech Fest organized by the
                          department of Artificial Intelligence and Machine
                          Learning under the aegis of DSCE Innovation Council
                          and SCRS Students Chapter.{" "}
                        </p>
                        <p>
                          Scheduled for the 22th and 23th of May, 2024, this event
                          showcases nine unique competitions, each designed for
                          individual or team participation.{" "}
                        </p>
                      </strong>{" "}
                    </div>
                    <div className="abs_tinfo">
                      <div className="abs_t">
                        <span className="abs_d">02</span>
                        <span className="abs_dt">DAYS</span>
                      </div>
                      <div className="abs_t">
                        <span className="abs_d">08</span>
                        <span className="abs_dt">EVENTS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
