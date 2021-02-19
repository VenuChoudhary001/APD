import React from "react";

function Carousel() {
  return (
    <section class="show-case mt-4">
      <div id="myCarousal" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousal" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousal" data-slide-to="1"></li>
          <li data-target="#myCarousal" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner ">
          <div class="carousel-item active carousel-image-1 offset-sm-3 offset-md-3"></div>
          <div class="carousel-item carousel-image-2 mb-2 offset-sm-3 offset-md-3 "></div>
          <div class="carousel-item carousel-image-3 mb-2 offset-sm-3  offset-md-3"></div>
        </div>
        <a href="#myCarousal" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#myCarousal" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
}

export default Carousel;
