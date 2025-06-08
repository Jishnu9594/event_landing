"use client";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import scheduleImg1 from "../../assets/images/resources/vip_ticket.jpg";
import scheduleImg2 from "../../assets/images/resources/silverj.png";
import scheduleImg3 from "../../assets/images/resources/goldj.png";
import scheduleImg4 from "../../assets/images/resources/entry.jpg";
import scheduleImg5 from "../../assets/images/resources/fans.jpg";
import scheduleImg6 from "../../assets/images/resources/couples.jpg";

const ScheduleOne = () => {
  const [activeTab, setActiveTab] = useState("1st-day");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="th-event" className="schedule-one">
      <div className="container">
        <div className="schedule-one__inner">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">Event Schedule</span>
            </div>
            <h2 className="section-title__title">Follow event schedule</h2>
          </div>
          <div className="schedule-one__main-tab-box tabs-box">
            <ul className="tab-buttons clearfix list-unstyled">
              <li
                className={`tab-btn ${
                  activeTab === "1st-day" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("1st-day")}
              >
                <h3>Day 01</h3>
                <p>Saturday 7 June 2025</p>
              </li>
              <li
                className={`tab-btn day2 ${
                  activeTab === "2nd-day" ? "active-btn" : ""
                }`}
                onClick={() => handleTabClick("2nd-day")}
              >
                <h3>Day 02</h3>
                <p>Sunday, June 8, 2025</p>
              </li>
            </ul>
            <div className="tabs-content">
              <div
                className={`tab ${activeTab === "1st-day" ? "active-tab" : ""}`}
                id="1st-day"
              >
                <div className="schedule-one__tab-content-box">
                  {/* <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="/event-details">Diamond</Link>
                      </h3>
                      <p className="schedule-one__text">
                        ₹9,999 /-
                        <br /> Entry for 4 people, VIP seating, premium access
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg1} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              Sunday 6 July 2025 <br /> Time: 04:00 pm - 11:00
                              pm Onwards
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              New Diamond Parappuram,Pattambi
                              <br /> Kerala,India
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="https://makemypass.com/event/uyire-musical-event"
                          className="main-menu__btn thm-btn gradient-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="">Sliver</Link>
                      </h3>
                      <p className="schedule-one__text">
                        ₹499/- <br /> Entry for 1 people, general admission
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg2} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              4 pm To 11 Pm <br /> 07 JUNE 2025 Saturday
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              OPH CONVENTION CENTRE <br /> AMAYUR,PATTAMBI
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="https://makemypass.com/event/uyire-musical-event-1?ticket_id=4a7c14ac-289d-4952-a88f-eeefe94a7c55"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="/event-details">Platinum</Link>
                      </h3>
                      <p className="schedule-one__text">
                        ₹1,999 /- <br /> Entry for 4 people, standard seating
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg2} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              10 Am To 10 Pm <br /> 20 April 2024
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              Mirpur 01 Road N 12 Dhaka <br /> Bangladesh
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="/contact"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="">Gold</Link>
                      </h3>
                      <p className="schedule-one__text">
                        ₹1999/- <br /> Entry for 4 people, standard seating
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg3} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              4 pm To 11 Pm <br /> 07 JUNE 2025 Saturday
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              OPH CONVENTION CENTRE <br /> AMAYUR,PATTAMBI
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="https://makemypass.com/event/uyire-musical-event-1?ticket_id=4aaf7711-61cf-4042-8259-bee571d47368"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Note: Children below 4 years can enter free of charge with a
                valid guardian ticket.
              </p>

              <div
                className={`tab ${activeTab === "2nd-day" ? "active-tab" : ""}`}
                id="2nd-day"
              >
                {activeTab === "2nd-day" && (
                  <div className="coming-soon-container">
                    {/* <h2 className="coming-soon-text">
                      {"Coming Soon".split("").map((char, index) => (
                        <span key={index}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </h2> */}
                  </div>
                )}
                <div className="schedule-one__tab-content-box">
                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="#">Entry Pass</Link>
                      </h3>
                      <p className="schedule-one__text">
                        First 500 tickets at ₹299!
                        <br /> Then ₹399. Hurry!
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg4} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              4 pm To 11 Pm <br /> 08 JUNE 2025 Sunday
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              OPH CONVENTION CENTRE <br /> AMAYUR,PATTAMBI
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="https://makemypass.com/event/uyire-musical-event-day-2?ticket_id=336f1ed6-f1d8-4377-9434-575eeb735b24"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="#">Fans Pass</Link>
                      </h3>
                      <p className="schedule-one__text">
                        First 100 tickets at ₹499!
                        <br /> Then ₹599. Hurry!
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg5} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              4 pm To 11 Pm <br /> 08 JUNE 2025 Sunday
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              OPH CONVENTION CENTRE <br /> AMAYUR,PATTAMBI
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="https://makemypass.com/event/uyire-musical-event-day-2?ticket_id=49573f19-06ea-454f-9cd6-0a979511b901"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-one__single">
                    <div className="schedule-one__left">
                      <h3 className="schedule-one__title">
                        <Link to="#">Couple Pass</Link>
                      </h3>
                      <p className="schedule-one__text">
                        First 50 tickets at ₹499! Entry for two persons
                        <br /> Then ₹599. Hurry!
                      </p>
                    </div>
                    <div className="schedule-one__img">
                      <img src={scheduleImg6} alt="" />
                    </div>
                    <div className="schedule-one__address-and-btn-box">
                      <ul className="list-unstyled schedule-one__address">
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>
                              4 pm To 11 Pm <br /> 08 JUNE 2025 Sunday
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>
                              OPH CONVENTION CENTRE <br /> AMAYUR,PATTAMBI
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="schedule-one__btn-box">
                        <Link
                          to="https://makemypass.com/event/uyire-musical-event-day-2?ticket_id=3d2971f4-dfab-4c16-97e0-81b73178b3f9"
                          className="schedule-one__btn thm-btn"
                        >
                          Buy Ticket <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleOne;
