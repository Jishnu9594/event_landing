import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnepageMenuItems from "./OnepageMenuItems";
import MobileMenu2 from "./MobileMenu2";
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import navLogo from "../../../assets/images/resources/logo-1.png";

const HeaderStyleEight = (props) => {
  const { item2, item3, item4, item5, item6 } = props;
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
                  <Link to="/">{/* <img src={navLogo} alt="Logo" /> */}</Link>
                </div>
              </div>
              <div className="main-menu__main-menu-box">
                <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                  <i className="fa fa-bars" />
                </div>
                <ul className="main-menu__list">
                  <li className="dropdown">
                    <Link to="#">Home</Link>
                  </li>
                  <OnepageMenuItems
                    menuItem3={item2 ? item2 : "Services"}
                    menuItem2={item3 ? item3 : "About"}
                    menuItem5={item4 ? item4 : "Team"}
                    menuItem6={item5 ? item5 : "Event"}
                    menuItem7={item6 ? item6 : "Blog"}
                  />
                </ul>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__btn-box">
                  <Link to="#" className="main-menu__btn thm-btn">
                    Buy Ticket <span className="icon-arrow-right"></span>
                  </Link>
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
                      <img src={navLogo} alt="Logo" />
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
                    <li className="dropdown">
                      <Link to="/">Home</Link>
                    </li>
                    <OnepageMenuItems
                      menuItem3={item2 ? item2 : "Services"}
                      menuItem2={item3 ? item3 : "About"}
                      menuItem5={item4 ? item4 : "Team"}
                      menuItem6={item5 ? item5 : "Event"}
                      menuItem7={item6 ? item6 : "Blog"}
                    />
                  </ul>
                </div>
                <div className="main-menu__right">
                  <div className="main-menu__btn-box">
                    <Link to="#" className="main-menu__btn thm-btn">
                      Buy Ticket <span className="icon-arrow-right"></span>
                    </Link>
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
        <MobileMenu2 handleMobileMenu={handleMobileMenu} />
      </header>
      <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
    </React.Fragment>
  );
};

export default HeaderStyleEight;
