import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const profileContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProfileProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const updateModal = (e) => {
    if(e.target.id === "video") return;
    setIsOpenModal(!isOpenModal);
  };

  const [profile, setProfile] = useState({name:"",img:""});

  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updateProfile = (profile, id) => {
    setProfile(profile);
    handleScroll(id);
  };

  return (
    <profileContext.Provider value={{ profile, updateProfile, isOpenModal, updateModal }}>
      {children}
    </profileContext.Provider>
  );
};
