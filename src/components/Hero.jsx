export function Hero() {
    return(
        <div className="h-screen flex flex-col items-center justify-center relative">
            <h1 className="font-semibold flex text-center items-center text-5xl tracking-widest md:text-8xl lg:text-9xl lg:tracking-widest">
                <span className="blur-sm text-4xl md:text-6xl lg:text-8xl">M</span>
                E
                <span className="blur-sm text-4xl md:text-6xl lg:text-8xl">M</span>
                OR
                <span className="blur-sm text-4xl md:text-6xl lg:text-8xl">IAS</span>
            </h1>
            <p className="tracking-widest text-lg md:text-2xl lg:text-4xl">
                <span className="font-medium">50años</span>
                <span className="font-extralight">entre</span>
                <span className="font-bold">historias</span>
            </p>
            <div className="absolute bottom-5 hover:text-lg hover:font-medium transition-all">
                <a className="flex flex-col items-center" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-14 h-14 hover:w-16 hover:h-16 transition-all " viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                </a>
            </div>
        </div>
    );
}