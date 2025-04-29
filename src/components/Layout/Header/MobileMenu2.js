"use client";
import React from "react";
import { Link } from "react-router-dom";
import MobileLogo from "../../../assets/images/resources/eventlogo1.png";

const MobileMenu2 = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link to="/" aria-label="Logo">
              <img src={MobileLogo} alt="Logo" className="mobile-logo-small" />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">{/* Menu items removed */}</ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:uyireofficial@gmail.com">
                uyireofficial@gmail.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+91 77360 39006">+91 77360 39006</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter" aria-label="Twitter" />
              <Link
                to="#"
                className="fab fa-facebook-square"
                aria-label="Facebook"
              />
              <Link
                to="#"
                className="fab fa-pinterest-p"
                aria-label="Pinterest"
              />
              <Link
                to="#"
                className="fab fa-instagram"
                aria-label="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
};

export default MobileMenu2;
