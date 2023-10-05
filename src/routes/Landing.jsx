import { Hero } from "../components/Hero";
import { Selector } from "../components/Selector";
import { SwiperCarousel } from "../components/SwiperCarousel";
import "swiper/css";
import { ProfileProvider } from "../context/profile-context";


export function Landing() {
  return (
    <div className="snap-y h-screen snap-mandatory no-scrollbar overflow-y-scroll">
      <ProfileProvider>
        <Hero />
        <Selector />
        <SwiperCarousel/>
      </ProfileProvider>
    </div>
  );
}
