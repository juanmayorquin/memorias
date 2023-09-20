export function Slide({ year, text, image, color}) {
  const bgColor = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundColor: color,
  }
  return (
    <div className="h-screen max-h-screen relative animate-fade animate-once animate-duration-1000 animate-delay-300 flex items-center">
      <div className="grid grid-cols-4 h-full w-full relative">
        <div className=" col-start-1 w-11/12 hover:w-full col-span-2 h-full relative transition-all">
          <div style={bgColor} className="h-full w-11/12 flex flex-col justify-center items-center">
            <h2 className="text-[12rem] font-bold text-white">{year}</h2>
            <div style={bgColor} className="absolute min-h-full w-2/12 top-0 right-3 -skew-x-6"></div>
          </div>
        </div>
        <div className="col-start-3 col-span-4 h-full flex flex-col justify-center items-center bg-white">
          <p className="leading-8 text-xl text-justify w-11/12">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
