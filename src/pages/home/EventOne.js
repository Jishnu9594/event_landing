"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import { Link } from "react-router-dom";
import eventImg from "../../assets/images/resources/png1.png";

export default function EventOne() {
  // State for dynamic content
  const [eventContent] = useState({
    sectionTagline: "About Uyire Musical Event",
    sectionTitle: "United by Music, Lasting Memories",
    buttonText: "Join The Event",
    buttonLink: "/#th-event",
    points: [
      {
        id: 1,
        iconClass: "icon-air-horn",
        title: "Artists & bands",
        description:
          "Uyire brings together top artists, singers, and DJs to create an unforgettable experience. From electrifying performances to soulful melodies, this is a celebration for music love",
        link: "/event",
      },
      {
        id: 2,
        iconClass: "icon-party-blower",
        title: "Audience Event Planner",
        description:
          "Uyire is designed to bring people together for an unparalleled experience. Whether you're a music enthusiast or just looking for a weekend escape, this event promises something for everyone",
        link: "/event",
      },
    ],
    eventImage: eventImg,
  });

  return (
    <>
      {/* Event One Start */}
      <section id="th-about" className="event-one">
        <div className="container">
          <div className="event-one__inner wow fadeInUp" data-wow-delay="300ms">
            <div className="event-one__top">
              <div className="section-title text-left">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">
                    {eventContent.sectionTagline}
                  </span>
                </div>
                <h2 className="section-title__title">
                  {eventContent.sectionTitle}
                </h2>
              </div>
              <div className="event-one__btn-box">
                <Link
                  to={eventContent.buttonLink}
                  className="main-menu__btn thm-btn gradient-btn"
                >
                  {eventContent.buttonText}
                  <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>

            <ul className="list-unstyled event-one__points">
              {eventContent.points.map((point) => (
                <li key={point.id}>
                  <div className="icon">
                    <span className={point.iconClass}></span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link to={point.link}>{point.title}</Link>
                    </h4>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="event-one__img-box">
              <img src={eventContent.eventImage} alt="Event" />
            </div>
          </div>
        </div>
      </section>
      {/* Event One End */}
    </>
  );
}
