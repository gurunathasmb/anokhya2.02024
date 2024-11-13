import "./Timeline.css";
import bimg from "../../Assets/bottom.png";

function Timeline() {
  return (
    <div className="timebody" id="Timeline">
      <div className="timeline_head">TIMELINE</div>
      <div className="maintimeline">
        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Inaugration</b>
            </h2>
            <small>22nd Nov 8:30 to 9:30</small>
            <p>
              Welcome to the dawn of innovation! Let the tech fest begin its
              electrifying journey.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Meme Splash</b>
            </h2>
            <small>22nd Nov 10:00 to 12:00</small>
            <p>
              Dive into the laughter at Meme Splash! Join the fun-filled event
              and let the memes roll!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>UI/UX</b>
            </h2>
            <small>22nd Nov 10:00 to 12:00</small>
            <p>
              Dive into design at UI/UX! Explore the art of user interface and
              user experience creation.
            </p>

            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Tech Debate</b>
            </h2>
            <small>22nd Nov 10:00 to 12:00</small>
            <p>
            Welcome to today's tech debate, where innovation meets critical thinking!
            Let's dive into the future, one argument at a time.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Tresure Hunt</b>
            </h2>
            <small>22nd Nov 10:00 to 13:00</small>
            <p>
              Get ready to unlock mysteries and uncover hidden treasures!
              Adventure awaits at every clue—let the hunt begin!
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>photography</b>
            </h2>
            <small>22nd Nov 10:00 to 13:00</small>
            <p>
            Capture the moment, freeze the magic—every click tells a story beyond words. 
            Let your lens reveal the world in new light!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Shark Tank</b>
            </h2>
            <small>22nd Nov 14:00 to 16:00</small>
            <p>
            Welcome to Shark Tank, where bold ideas meet big opportunities! 
            Pitch your passion, convince the sharks, and make waves in the world of business.
            </p>

            <span className="left-container-arrow"></span>
          </div>
        </div>
        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>BGMI</b>
            </h2>
            <small>22nd Nov  Online </small>
            <small>23rd Nov Offline 9:00 to 13:00</small>
            <p>
            Welcome to the thrill of BGMI! Drop in, gear up, 
            and fight your way to victory in India’s battlegrounds. Get ready for action!
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        

        <div className="maincontainer left-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-right" className="text-box lt">
            <h2>
              <b>Free Fire</b>
            </h2>
            <small>23rd Nov 9:00 to 13:00</small>
            <p>
            Welcome to Free Fire! Dive in, strategize, 
            and survive in a battle where every second counts. 
            Get ready to be the last one standing!
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="maincontainer right-container">
          <div data-aos="zoom-in" className="timelineimgdiv"></div>
          <div data-aos="fade-left" className="text-box rt">
            <h2>
              <b>Ending Ceremony</b>
            </h2>
            <small>23rd Nov 14:00 to 16:00</small>
            <p>
              The exhilarating conclusion of our tech fest promises electrifying
              performances, awards, and unforgettable memories.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
      <div className="timeline_img">
        <img src={bimg} alt="" />
      </div>
    </div>
  );
}

export default Timeline;
