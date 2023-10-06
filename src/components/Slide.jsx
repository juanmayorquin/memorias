import { profileContext } from "../context/profile-context";
import { useContext, useState } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import TypewriterClass from "typewriter-effect/dist/core";
import { useSwiper } from 'swiper/react';
import { Modal } from "./Modal";


// eslint-disable-next-line react/prop-types
export function Slide({slide}) {
  const { year, text, alt, color } = slide;
  const { profile, isOpenModal, updateModal } = useContext(profileContext);
  const [isDone, setIsDone] = useState(false);

  const swiper = useSwiper()
  const { ref, inView, } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });

  const updateIsDone = () => {
    setIsDone(true);
  };

  const bgColor = {
    backgroundColor: color,
  };
  const bgImage = {
    backgroundImage: `url(./img/slides/${year}.jpg)`,
    backgroundSize: "cover",
  };
  return (
    <div className="  h-screen w-screen min-w-full max-h-screen relative animate-fade animate-once animate-duration-1000 animate-delay-300 flex items-center">
      
      {isOpenModal && <Modal video={`./vid/${year}.mp4`} />}

      <div className="h-full w-full absolute blur" style={bgImage}></div>
      <div className="h-full w-full absolute opacity-10" style={bgColor}></div>
      {profile.img && (
        <img
          className="absolute object-contain bottom-3 w-[40%] md:max-w-[30%] xl:max-w-[23%] lg:bottom-0 lg:left-[20%] xl:left-[30%] z-20 hover:scale-110 cursor-pointer transition-all"
          src={profile.img}
          alt="profile"
          onClick={updateModal}
        />
      )}
      <div className="flex flex-col lg:grid grid-cols-3 h-full w-full relative">
        <div className="col-start-1 w-full lg:w-11/12 hover:w-full lg:h-full relative transition-all">
          <div
            style={bgColor}
            className="lg:h-full w-full lg:w-10/12 flex flex-col justify-center items-center text-white"
          >
            <h2 className="text-8xl lg:text-[7rem] xl:text-[9rem] font-bold z-20 transition-all">{year}</h2>
            <div
              style={bgColor}
              className="hidden lg:block absolute min-h-full w-10/12 top-0 right-0 -skew-x-[5deg]"
            ></div>
          </div>
        </div>
        <div className="col-start-2 col-span-3 h-full flex flex-col justify-start  items-center">
          <p
            ref={ref}
            id={`typewriter${year}`}
            className="overflow-y-auto max-h-[60vh] md:leading-8 md:text-lg text-justify w-11/12 md:w-10/12 px-4 py-4 md:px-20 md:py-12 font-light transition-all my-4 bg-white bg-opacity-60"
          >
            {inView && (
              <Typewriter
                onInit={() => {
                  const typewriter = new TypewriterClass(
                    document.getElementById(`typewriter${year}`),
                    {
                      cursor: "",
                      loop: false,
                      delay: 2,

                    }
                  );
                  typewriter
                    .typeString(text)
                    .callFunction(updateIsDone)
                    .start();
                }}
              />
            )}
          </p>
          {isDone && <button onClick={() => swiper.slideNext()} style={bgColor} className="absolute bottom-3 right-3 lg:right-3 lg:bottom-1/2 z-40 text-xl font-semibold rounded-lg border-white px-2 py-3 text-white animate-fade hover:px-4 hover:py-4 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </button>}
          <img
            className="hidden absolute w-[90%] bottom-0 xl:block  md:w-[70%] lg:w-[40%] lg:right-0 transition-all"
            src={`./img/slides/${year}.png`}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}
