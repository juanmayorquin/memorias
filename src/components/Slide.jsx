export function Slide({year, title, description, image, color}) {
    const style = {
        backgroundColor: color,
    }
    return (
        <section className="grid grid-cols-2">
            <div className="">
                <h2 className="p-4 text-8xl text-right font-bold">{year}</h2>
            </div>
            <div className="p-4 border-l-4 border-l-red-700">
                <h3 className="text-4xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    );
}