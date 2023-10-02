export function Carousel({ slides }) {
    let carousel;
    images.forEach(element => {
        carousel += `<div className="w-screen">
        ${slides}
      </div>`;
    });
  return (
    <div className="carousel">
        {carousel}
    </div>
  );
}
