"use client"; // Ensures the component runs on the client side

import { Link } from "react-router-dom";
import { useState } from "react";

export default function ServicesOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [servicesContent] = useState({
    sectionTagline: "event benefits",
    sectionTitle: "Why should you join our event",
    services: [
      {
        id: 1,
        title: "Feel the Rhythm of Uyire",
        description:
          "Uyire brings music lovers together for an unforgettable experience, featuring powerful performances, electrifying energy, and vibes that will stay with you long after the event ends.",
        icon: "icon-camera",
        link: "/event-prodigy",
      },
      {
        id: 2,
        title: "Star-Studded Lineup",
        description:
          "Top singers, DJs, and celebrities light up the stage for two full days. It’s your chance to witness iconic performances live and up close.",
        icon: "icon-skewer",
        link: "/stellar-events-co",
      },
      {
        id: 3,
        title: "A Celebration for All",
        description:
          "Whether you're a die-hard music lover, a casual listener, or looking for a weekend escape with friends or family — Uyire has something for everyone.",
        icon: "icon-dinner-table",
        link: "/elite-event-management",
      },
    ],
  });

  return (
    <>
      {/* Services One Start */}
      <section id="th-service" className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">
                {servicesContent.sectionTagline}
              </span>
            </div>
            <h2 className="section-title__title">
              {servicesContent.sectionTitle}
            </h2>
          </div>
          <div className="row">
            {servicesContent.services.map((service) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className={service.icon}></span>
                  </div>
                  <h3 className="services-one__title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p className="services-one__text">{service.description}</p>
                  <Link to={service.link} className="services-one__read-more">
                    Read More <span className="icon-arrow-right"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services One End */}
    </>
  );
}
