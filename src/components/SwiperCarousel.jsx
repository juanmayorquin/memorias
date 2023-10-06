import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "../components/Slide";
import { slides } from "../data";

export const SwiperCarousel = () => {

  return (
    <Swiper
      id="slider"
      className="snap-start"
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={false}
      direction="horizontal"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.year}>
          <Slide 
            slide={slide}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
