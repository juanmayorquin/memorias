import { Hero } from "../components/Hero";
import { Slide } from "../components/Slide";

export function Landing() {
  return (
    <>
      <Hero />
      <Slide
        year={"1960"}
        text={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ea provident eius. Quo adipisci vel porro sint vitae, numquam corporis minima pariatur corrupti provident iste nobis voluptatibus totam, ut eveniet minus dolorum iure. Architecto ab possimus ipsum tempora officia distinctio vel aliquid accusamus, iure minima tenetur rem est nam atque ipsam error earum sunt vitae minus repellendus magni maxime. Sunt, provident velit maxime quia, enim fugiat inventore quod nisi numquam, beatae architecto asperiores neque. Consequuntur quas quasi molestias qui ratione doloribus voluptatibus, accusamus dicta saepe quaerat non aut eveniet, atque velit! Numquam aliquam provident enim laborum veniam perspiciatis delectus maxime."
        }
        backgroundImage={"/img/1970-labs.png"}
        color={"#DC2626"}
        image={"/img/1970-labs-png.png"}
      />
    </>
  );
}
