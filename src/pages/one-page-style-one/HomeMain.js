import React from "react";
import Banner from "../home/Banner";
import SlidingText from "../home/SlidingText";
import EventOne from "../home/EventOne";
import BuyTicket from "../home/BuyTicket";

import EventDirection from "../home/EventDirection";
import GalleryOne from "../home/GalleryOne";
import ScheduleOne from "../home/ScheduleOne";
// import BrandOne from "../home/BrandOne";

const HomeMain = () => {
  return (
    <React.Fragment>
      <Banner />

      <SlidingText />
      <EventOne />
      <BuyTicket />
      <br></br>
      <EventDirection />
      <GalleryOne />
      <ScheduleOne />
      {/* <BrandOne /> */}
    </React.Fragment>
  );
};

export default HomeMain;
