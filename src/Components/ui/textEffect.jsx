"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) => Math.floor(Math.random() * max);

import PropTypes from "prop-types";

export function HyperText({
  text,
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
  },
  className,
  animateOnLoad = true,
}) {
  HyperText.propTypes = {
    text: PropTypes.string.isRequired,
    duration: PropTypes.number,
    framerProps: PropTypes.object,
    className: PropTypes.string,
    animateOnLoad: PropTypes.bool,
  };
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animateOnLoad && isFirstRender.current) {
        clearInterval(interval);
        isFirstRender.current = false;
        return;
      }
      if (interations.current < text.length) {
        setDisplayText((t) =>
          t.map((l, i) =>
            l === " "
              ? l
              : i <= interations.current
              ? text[i]
              : alphabets[getRandomInt(26)]
          )
        );
        interations.current += 0.1;
      } else {
        setTrigger(false);
        clearInterval(interval);
      }
    }, duration / (text.length * 10));

    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <div
      className="overflow-hidden  flex cursor-default "
      onMouseEnter={triggerAnimation}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.h1
            key={i}
            className={`font-mono ${letter === " " ? "w-3" : ""} ${
              className || ""
            }`}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
