export function Hero() {
  return (
    <section>
      <div className="z-50 h-screen flex flex-col bg-gradient-to-br from-white to-gray-300 items-center justify-center relative animate-fade animate-once animate-duration-1000 animate-delay-300">
        <div className="text-center">
          <h1 className="font-semibold flex items-center animate-fade animate-delay-500 tracking-widest text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="animate-breathe-5 transition-all animate-delay-0">
              M
            </span>
            <span className="animate-breathe-7 transition-all animate-delay-200">
              E
            </span>
            <span className="animate-breathe-9 transition-all animate-delay-500">
              M
            </span>
            <span className="animate-breathe-5 transition-all animate-delay-300">
              O
            </span>
            <span className="animate-breathe-9 transition-all animate-delay-300">
              R
            </span>
            <span className="animate-breathe-5 transition-all animate-delay-0">
              I
            </span>
            <span className="animate-breathe-7 transition-all animate-delay-0">
              A
            </span>
            <span className="animate-breathe-9 transition-all animate-delay-200">
              S
            </span>
          </h1>
          <p className="tracking-widest xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl animate-fade-down animate-delay-[1200ms] animate-duration-1000">
            <span className="font-medium">50años</span>
            <span className="font-extralight">entre</span>
            <span className="font-bold">historias</span>
          </p>
        </div>
        <div className="absolute bottom-5 hover:text-lg hover:font-medium transition-all animate-fade-down animate-delay-[1700ms]">
          <a className="flex flex-col items-center" href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="motion-safe:animate-pulse animate-duration-1000 w-14 h-14 hover:w-16 hover:h-16 hover:animate-none transition-all "
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
