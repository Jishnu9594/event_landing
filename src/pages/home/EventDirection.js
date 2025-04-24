"use client";

import { useState } from "react";
import CountUp from "react-countup";
import directionIcon from "../../assets/images/icon/event-direction-chat-icon.png";
import backgroundVideo from "../../assets/images/resources/Video-347.mp4"; // 👈 your video path here

export default function EventDirection() {
  const [eventContent] = useState({
    tagline: "Experience Uyire",
    title: "Creating Musical <br> Memories Together",
    text: "Uyire brings music lovers together for an unforgettable experience. <br> From electrifying performances to soulful moments — it’s all here.",
    phone: "3075550133",
    callText: "Call Us",
    callNumber: "(307) 555-0133",
    iconSrc: directionIcon,
  });

  return (
    <section className="event-direction">
      <div className="container position-relative overflow-hidden event-direction__container">
        {/* 🎥 Background Video */}
        <div className="event-direction__video-wrapper">
          <video
            className="event-direction__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* 📄 Content Over Video */}
        <div className="event-direction__inner position-relative z-2">
          <div className="row">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="100ms">
              <div className="event-direction__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <span className="section-title__tagline">
                      {eventContent.tagline}
                    </span>
                  </div>
                  <h2
                    className="section-title__title"
                    dangerouslySetInnerHTML={{ __html: eventContent.title }}
                  ></h2>
                </div>
                <p
                  className="event-direction__text"
                  dangerouslySetInnerHTML={{ __html: eventContent.text }}
                ></p>
                <div className="event-direction__call">
                  <div className="event-direction__call-icon">
                    <img src={eventContent.iconSrc} alt="Call Icon" />
                  </div>
                  <div className="event-direction__call-content">
                    <p>{eventContent.callText}</p>
                    <h4>
                      <a href={`tel:${eventContent.phone}`}>
                        {eventContent.callNumber}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
              <div className="event-direction__right">
                <ul className="event-direction__counter list-unstyled">
                  <li>
                    <div className="event-direction__counter-single">
                      <div className="event-direction__counter-box">
                        <h3 className="odometer">
                          <CountUp start={0} end={2} duration={2} />
                        </h3>
                      </div>
                      <p className="event-direction__counter-text">
                        Two stages for back-to-back performances
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="event-direction__counter-single">
                      <div className="event-direction__counter-box">
                        <h3 className="odometer">
                          <CountUp start={0} end={101} duration={2} />
                        </h3>
                        <span className="event-direction__counter-plus">+</span>
                      </div>
                      <p className="event-direction__counter-text">
                        Hours Of Music
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="event-direction__counter-single">
                      <div className="event-direction__counter-box">
                        <h3 className="odometer">
                          <CountUp start={0} end={10} duration={2} />
                        </h3>
                        <span className="event-direction__counter-plus">+</span>
                      </div>
                      <p className="event-direction__counter-text">
                        Event Stages
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="event-direction__counter-single">
                      <div className="event-direction__counter-box">
                        <h3 className="odometer">
                          <CountUp start={0} end={20} duration={2} />
                        </h3>
                        <span className="event-direction__counter-plus">+</span>
                      </div>
                      <p className="event-direction__counter-text">
                        Music Brands
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
