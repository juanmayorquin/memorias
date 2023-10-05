import { useContext } from "react";
import { profileContext } from "../context/profile-context";
export function Selector() {
  const profiles = [
    { name: "Estudiante", img: "/img/personaje.png" },
    { name: "Profesor", img: "/img/personaje.png" },
  ];

  const { updateProfile } = useContext(profileContext);
 
  return (
    <section id="selector" className="snap-start">
      <div className="h-screen flex flex-col bg-gradient-to-br from-white to-gray-300 justify-center items-center relative animate-fade animate-once animate-duration-1000 animate-delay-300">
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-20">Selecciona tu perfil</h3>
          <div className="flex gap-48 justify-center items-center">
            {profiles.map((profile) => (
              <div
                onClick={() => updateProfile(profile,"slider")}
                key={profile.name}
                className="flex flex-col items-center w-[15%] hover:w-[18%] hover:cursor-pointer hover:font-semibold transition-all"
              >
                <img src={profile.img} alt="Estudiante" />
                <p className="my-5 text-lg">{profile.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
