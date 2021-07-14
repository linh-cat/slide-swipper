import React from "react";
import "./App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

function App() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'} spaceBetween={40}  
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/images/2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/images/3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/images/1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/images/2.jpg" /></SwiperSlide>
       
      </Swiper>

      {/* <div class="swiper-container mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-pagination"></div>
      </div> */}
    </>
  );
}

export default App;
