import { profileContext } from "../context/profile-context";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
export function Slide({ year, text, backgroundImage, image, alt, color}) {
  const { profile } = useContext(profileContext);
  console.log(profile)

  const bgColor = {
    backgroundColor: color,
  }
  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  }
  return (
    <div className="  h-screen w-screen min-w-full max-h-screen relative animate-fade animate-once animate-duration-1000 animate-delay-300 flex items-center">
      {
        profile.img && <img className="absolute bottom-0 left-[30%] h-[45vh] z-20" src={profile.img} alt="profile" />
      }
        
      <div className="h-full w-full absolute blur" style={bgImage}></div>
      <div className="h-full w-full absolute opacity-10" style={bgColor}></div>
      <div className="grid grid-cols-3 h-full w-full relative">
        <div className=" col-start-1 w-11/12 hover:w-full h-full relative transition-all">
          <div style={bgColor} className="h-full w-11/12 flex flex-col justify-center items-center text-white">
            <h2 className="text-[10rem] font-bold z-50">{year}</h2>
            <div style={bgColor} className="absolute min-h-full w-11/12 top-0 right-0 -skew-x-[5deg]"></div>
          </div>
          
        </div>
        <div className="col-start-2 col-span-3 h-full flex flex-col justify-start items-center">
          <p className="leading-8 text-lg text-justify w-10/12 px-20 py-12 bg-white bg-opacity-60 font-light transition-all my-4">
            {text}
          </p>
          <img className="absolute w-5/12 bottom-0 right-0 hover:w-[45%] transition-all" src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}
