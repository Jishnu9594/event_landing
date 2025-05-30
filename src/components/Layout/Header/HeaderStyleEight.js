import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu2 from "./MobileMenu2";
import SearchPopup from "./SearchPopup";
// import Sidebar from "./Sidebar";
import navLogo from "../../../assets/images/resources/eventlogo1.png";

const HeaderStyleEight = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    if (!isMobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link to="/">
                    <img src={navLogo} alt="Logo" className="custom-logo" />
                  </Link>
                </div>
              </div>
              <div className="main-menu__main-menu-box">
                <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                  <i className="fa fa-bars" />
                </div>
                <ul className="main-menu__list">{/* No menu items here */}</ul>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__btn-box">
                  <a
                    href="#th-event"
                    className="main-menu__btn thm-btn gradient-btn"
                  >
                    Buy Ticket <span className="icon-arrow-right"></span>
                  </a>
                </div>
                <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                  <Link to="#" className="main-menu__cart icon-cart"></Link>
                  <Link
                    to="#"
                    className="main-menu__search search-toggler"
                    onClick={handlePopup}
                  >
                    <span className="icon-loupe"></span>
                  </Link>
                  <div
                    className="main-menu__nav-sidebar-icon"
                    onClick={handleSidebar}
                  >
                    <div className="navSidebar-button">
                      <span className="icon-menu1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Sticky Header */}
        <div
          className={`stricky-header stricked-menu main-menu ${
            isVisible ? "stricky-fixed" : ""
          }`}
        >
          <div className="sticky-header__content" />
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="main-menu__wrapper-inner">
                <div className="main-menu__left">
                  <div className="main-menu__logo">
                    <Link to="/">
                      <img src={navLogo} alt="Logo" className="custom-logo" />
                    </Link>
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <div
                    className="mobile-nav__toggler"
                    onClick={handleMobileMenu}
                  >
                    <i className="fa fa-bars" />
                  </div>
                  <ul className="main-menu__list">
                    {/* No menu items here */}
                  </ul>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__btn-box">
                    <a
                      href="#th-event"
                      className="main-menu__btn thm-btn gradient-btn"
                    >
                      Buy Ticket <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                  <div className="main-menu__cart-search-nav-sidebar-icon-and-btn-box">
                    <Link to="#" className="main-menu__cart icon-cart"></Link>
                    <div
                      className="main-menu__search search-toggler"
                      onClick={handlePopup}
                    >
                      <span className="icon-loupe"></span>
                    </div>
                    <div
                      className="main-menu__nav-sidebar-icon"
                      onClick={handleSidebar}
                    >
                      <div className="navSidebar-button">
                        <span className="icon-menu1"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile menu and popups */}
        <MobileMenu2 handleMobileMenu={handleMobileMenu} />
      </header>

      {/* <SearchPopup isPopup={isPopup} handlePopup={handlePopup} /> */}
      {/* <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} /> */}
    </React.Fragment>
  );
};

export default HeaderStyleEight;
