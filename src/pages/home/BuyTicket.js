// src/components/BuyTicket.jsx
"use client";

import React, { useState } from "react";
import ticketImg from "../../assets/images/resources/pn1.png";

export default function BuyTicket() {
  // Dynamic content & links
  const [ticketContent] = useState({
    address: "New Diamond Parappuram presents,Pattambi,Ongallur,India",
    timing: " 4 pm To 11 Pm ,07 JUNE 2025 Saturday 08 JUNE 2025 Sunday",
    title: "Grab Your Seat Now , Don’t Miss the Magic",
    description:
      "Uyire brings music lovers together for two unforgettable days of live performances, energy, and celebration. Be part of the vibe — before it's too late!",
    buttons: [
      {
        id: 1,
        text: "Buy Your Ticket",
        link: "#th-event", // scrolls to event section
        class: "main-menu__btn thm-btn gradient-btn",
      },
      {
        id: 2,
        text: "Contact Us",
        link: "#footer", // scrolls to footer
        class: "main-menu__btn thm-btn gradient-btn",
      },
    ],
  });

  // Handles both section-scrolling and external navigation
  const handleButtonClick = (link) => {
    if (link.startsWith("#")) {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <>
      {/* Buy Ticket Start */}
      <section className="buy-ticket">
        <div className="container">
          <div className="row">
            {/* Left content */}
            <div className="col-xl-6">
              <div
                className="buy-ticket__left wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <ul className="buy-ticket__address list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-clock"></span>
                    </div>
                    <div className="text">
                      <p>{ticketContent.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-pin"></span>
                    </div>
                    <div className="text">
                      <p>{ticketContent.timing}</p>
                    </div>
                  </li>
                </ul>
                <h3 className="buy-ticket__title">{ticketContent.title}</h3>
                <p className="buy-ticket__text">{ticketContent.description}</p>
                <div className="buy-ticket__btn-box">
                  {ticketContent.buttons.map((button) => (
                    <button
                      key={button.id}
                      className={`${button.class} thm-btn`}
                      onClick={() => handleButtonClick(button.link)}
                    >
                      {button.text}
                      <span className="icon-arrow-right"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="col-xl-6">
              <div
                className="buy-ticket__right wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="buy-ticket__img">
                  <img src={ticketImg} alt="Ticket promotion" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Buy Ticket End */}
    </>
  );
}
