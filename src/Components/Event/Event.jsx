import { useEffect, useRef } from "react";
import "./Event.css";
import event_data from "../../Assets/Data/Events_data.json";
import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, children, ...rest } = props;
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);

    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, [options]);

  return (
    <div ref={tiltRef} {...rest}>
      {children}
    </div>
  );
}

function Coderelay() {
  const eventIndex = window.location.pathname.slice(8) - 1; // Extract event index from URL
  const event_ = event_data[eventIndex];
  const btn_id = event_.button_id;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.konfhub.com/widget.js";
    script.setAttribute("button_id", btn_id);
    document.getElementById("konfhub-widget-container").appendChild(script);

    return () => {
      document.getElementById("konfhub-widget-container").removeChild(script);
    };
  }, [btn_id]);

  const options = {
    speed: 2000,
    max: 20,
  };

  // Handle navigation based on event index
  const handleNextEvent = () => {
    if (eventIndex < event_data.length - 1) {
      const nextEventIndex = eventIndex + 1;
      window.location.href = `/events/${nextEventIndex + 1}`;
    } else {
      window.location.href = "/";
    }
  };

  const handlePrevEvent = () => {
    if (eventIndex > 0) {
      const prevEventIndex = eventIndex - 1;
      window.location.href = `/events/${prevEventIndex + 1}`;
    }
  };

  return (
    <>
      <div className="IndEventmain">
        <div className="link"> 
                <a href={`/`}>
                  <i
                    className="fa-solid fa-home"
                    style={{ color: "#ffffff" ,fontSize:"30px"}}
                  ></i>
                </a>
            </div>
        <div className="card_comp">
          <div className={`card_img_style event${event_.event_id}`}></div>

          <div className="event_description">
            <h2
              className="event_heading"
              style={{ color: `${event_.colour_code}` }}
            >
              {event_.event_name}
            </h2>
            <p>{event_.event_description}</p>
            <div id="konfhub-widget-container"></div>
          </div>
        </div>
        <div className="other_event_details">
          <div className="text_comp">
            <Tilt options={options}>
              <div className="event_time_details">
                <p style={{ whiteSpace: "pre-wrap" }}>
                  <i
                    className="fa-regular fa-calendar"
                    style={{ color: "ffffff" }}
                  ></i>{" "}
                  Event Date (Prelims): TBD
                </p>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  <i
                    className="fa-regular fa-calendar"
                    style={{ color: "ffffff" }}
                  ></i>{" "}
                  Event Date (Finals): {event_.event_time}
                </p>
                <p>
                  <i
                    className="fa-solid fa-money-check-dollar"
                    style={{ color: "#ffffff" }}
                  ></i>{" "}
                  Fee: {event_.registration_fees}
                </p>
                <p>
                  <i
                    className="fa-solid fa-user-group"
                    style={{ color: "#fafcff" }}
                  ></i>{" "}
                  Team Size: {event_.team_size}
                </p>
              </div>
            </Tilt>

            <Tilt>
              <div className="event_prize_details">
                <h2>
                  <i
                    className="fa-solid fa-trophy"
                    style={{ color: "#ffffff" }}
                  ></i>{" "}
                  Exciting Prizes
                </h2>
                <p> First Prize: {event_.prize_pool.first_prize}</p>
                <p> Second Prize: {event_.prize_pool.second_prize}</p>
              </div>
            </Tilt>

            <Tilt>
              <div className="event_coordinators_details">
                <h2>Co-ordinator's</h2>
                <div className="name_and_phone">
                  <p>
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    {event_.event_coordinator1}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap", color: "greenyellow" }}>
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    {event_.coordinator1_mobile}
                  </p>
                </div>

                <div className="name_and_phone">
                  <p>
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    {event_.event_coordinator2}
                  </p>
                  <p style={{ whiteSpace: "pre-wrap", color: "greenyellow" }}>
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    {event_.coordinator2_mobile}
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>

        <div className="navigation_buttons">
          {/* "Previous" Button */}
          {eventIndex > 0 && (
            <div className="content1">
              <a onClick={handlePrevEvent}>Previous</a>
            </div>
          )}

          {/* "Next" Button */}
          {eventIndex < event_data.length - 1 && (
            <div className="content2">
              <a onClick={handleNextEvent}>Next</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Coderelay;
