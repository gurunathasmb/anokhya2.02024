import { useRef, useEffect, useState } from "react";
import "./Events.css";
import event_data from "../../Assets/Data/Events_data.json";
import { color } from "framer-motion";

const Events = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollInterval = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const handleNext = () => {
    const items = sliderRef.current.children;
    sliderRef.current.appendChild(items[0]); // Move first item to the end
  };

  const handlePrev = () => {
    const items = sliderRef.current.children;
    sliderRef.current.prepend(items[items.length - 1]); // Move last item to the front
  };

  // Start infinite scroll on desktop
  useEffect(() => {
    if (!isMobile && sliderRef.current) {
      startAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isMobile]);

  const startAutoScroll = () => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        // If scrolled to the end, reset scroll
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 20); // Adjust speed if needed
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  // Mobile touch handlers
  const handleTouchStart = () => {
    if (!isMobile) return;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    e.preventDefault();
    sliderRef.current.scrollLeft -= e.touches[0].pageX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  return (
    <div className="events" id="Events">
      <div className="events_con">
        <div className="events_head">
          <h2 style={{fontSize:"40px"}}>EVENTS</h2>
          <p style={{color:"yellow", fontSize:"20px"}}>Click on event card to know more !!</p>
          <p1>slide to view</p1>
        </div>
        <div className="event_con">
          <ul
            className="slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {event_data.map((ele, index) => (
              <li
                className="item"
                key={`${ele.event_id}-${index}`}
                style={{ backgroundImage: `url(${ele.img_path})` }}
              >
                <div className="content">
                  <a href={`/events/${ele.event_id}`}>Explore More</a>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
      <nav className="nav">

            <button className="btn prev" onClick={handlePrev}>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>"guru"
            <button className="btn next" onClick={handleNext}>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </nav>
    </div>
    
  );
};

export default Events;
