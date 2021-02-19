import React, { useState } from "react";
import Announcements from "./Announcements";
import Carousel from "./Carousel";
import Description from "./Description";
import Footer from "./Footer";
import TimeLine from "./TimeLine";

function HomePage() {
  const [showTimeLine, setShowTimeLine] = useState(false);
  return (
    <>
      <Carousel />
      <Description />
      <TimeLine />
      <button
        className="btn btn-outline-dark btn-lg d-block mx-auto my-2"
        onClick={() => setShowTimeLine((prev) => (prev ? false : true))}
      >
        {showTimeLine ? "Show Less" : "View Timeline"}
      </button>

      <Announcements />
      <Footer />
    </>
  );
}

export default HomePage;
