export function Hero() {
    
    return(
        <div className="h-screen flex flex-col items-center justify-center relative animate-fade animate-once animate-duration-1000 animate-delay-300">
            <h1 className="font-semibold flex text-center items-center text-5xl tracking-widest md:text-8xl lg:text-9xl lg:tracking-widest">
                <span className="animate-breathe-5 animate-delay-0">M</span>
                <span className="animate-breathe-7 animate-delay-200">E</span>
                <span className="animate-breathe-9 animate-delay-100">M</span>
                <span className="animate-breathe-5 animate-delay-50">O</span>
                <span className="animate-breathe-9 animate-delay-200">R</span>
                <span className="animate-breathe-5 animate-delay-75">I</span>
                <span className="animate-breathe-7 animate-delay-0">A</span>
                <span className="animate-breathe-9 animate-delay-200">S</span>
            </h1>
            <p className="tracking-widest text-lg md:text-2xl lg:text-4xl animate-fade-down animate-delay-[1200ms] animate-duration-1000">
                <span className="font-medium">50años</span>
                <span className="font-extralight">entre</span>
                <span className="font-bold">historias</span>
            </p>
            <div className="absolute bottom-5 hover:text-lg hover:font-medium transition-all animate-fade-down animate-delay-[1700ms]">
                <a className="flex flex-col items-center" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-pulse animate-duration-1000 w-14 h-14 hover:w-16 hover:h-16 hover:animate-none transition-all " viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                </a>
            </div>
        </div>
    );
}