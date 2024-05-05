import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function TutorCard({ tutor }) {
  return (
    <div className="shadow-lg   shadow-gray-600 p-4 rounded-xl flex flex-col justify-center">
      <div className="mx-auto">{tutor.image}</div>
      <p className="text-center mb-2 my-4 font-semibold">{tutor.name}</p>
      <div className="gap-4 my-2 flex justify-center ">
        <a
          href={tutor.links.instagram}
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaSquareInstagram size={25} />
        </a>
        <a
          href={tutor.facebook}
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaFacebook size={25} />
        </a>
        <a
          href={tutor.links.linkedin}
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href={tutor.links.whatsapp}
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaWhatsapp size={25} />
        </a>
      </div>

      <div className="ml-4">
        {tutor.feats.map((feat, index) => (
          <p key={index}>
            <span>• </span>
            <span className="text-sm font-semibold"> {feat}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default TutorCard;
