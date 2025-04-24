import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Background video only
import BackgroundVideo from "../../assets/images/resources/Video-347.mp4";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
  },
};

export default function Banner() {
  return (
    <section
      id="th-home"
      className="main-slider"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="main-slider__video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Swiper
        {...swiperOptions}
        className="swiper-container thm-swiper__slider"
      >
        <div className="swiper-wrapper">
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="main-slider__content">
                      <p className="main-slider__sub-title">
                        Two Days. Unlimited Music. Unforgettable Memories.
                      </p>
                      <h2 className="main-slider__title">
                        Uyire Musical
                        <br /> <span>Event 2025</span>
                      </h2>
                      <p className="main-slider__text">
                        Uyire Musical Event 2025 is not just a concert — it's a
                        celebration of sound, <br />
                        energy, and unforgettable vibes. Over two days, enjoy
                        live music from top <br />
                        singers, DJs, and celebrities. Whether you're with
                        friends or family, <br />
                        this event promises non-stop entertainment and lasting
                        memories.
                      </p>
                      <ul className="list-unstyled main-slider__address">
                        <li>
                          <div className="icon">
                            <span className="icon-pin"></span>
                          </div>
                          <div className="text">
                            <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-clock"></span>
                          </div>
                          <div className="text">
                            <p>10 Am To 10 Pm 20 April 2024</p>
                          </div>
                        </li>
                      </ul>
                      <div className="main-slider__btn-box">
                        <Link to="#" className="main-slider__btn thm-btn">
                          Purchase Ticket{" "}
                          <span className="icon-arrow-right"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-pagination" id="main-slider-pagination" />
    </section>
  );
}
