import { useContext } from "react";
import { profileContext } from "../context/profile-context";

export function Modal({video}) {
    const { updateModal } = useContext(profileContext);
    return (
        <div className="animate-fade absolute z-50 bg-black/80 h-full w-full flex flex-col justify-center items-center" onClick={updateModal}>
            <div className="bg-white px-0 py-8 w-1/2 rounded-lg flex flex-col">
                <video id="video" className="w-11/12 mx-auto" src={video} controls></video>
            </div>
        </div>
    );
}