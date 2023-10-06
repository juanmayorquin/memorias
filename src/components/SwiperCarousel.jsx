import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "../components/Slide";
import { slides } from "../data";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const SwiperCarousel = () => {
  return (
    <Swiper
      id="slider"
      className="snap-start"
      spaceBetween={0}
      slidesPerView={1}
      mousewheel={false}
      direction="horizontal"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.year}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
