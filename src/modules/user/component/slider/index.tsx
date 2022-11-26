import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import slide3 from '../../../../atoms/images/slide3.png';
import slide1 from '../../../../atoms/images/slide1.png';
import slide2 from '../../../../atoms/images/slide2.png';

// Import Swiper styles
import 'swiper/css';

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={slide1} alt="" className="h-[100px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" className="h-[100px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" className="h-[100px]" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
