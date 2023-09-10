export function SlideReverse({year, title, description, image, color}) {
    const style = {
        backgroundColor: color,
    }
    return (
        <section className="grid grid-cols-2">
            <div className="p-4 text-right">
                <h3 className="text-4xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
            <div className="border-l-4 border-l-red-700">
                <h2 className="p-4 text-8xl font-bold text-left">{year}</h2>
            </div>
        </section>
    );
}