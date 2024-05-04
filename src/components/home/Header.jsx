import React from "react";
import headerImage from "../../../public/images/others/header.svg";
import Image from "next/image";

function Header() {
  return (
    <section className="container mx-auto px-6 ">
      <div className="flex gap-3 sm:gap-5 flex-col justify-center items-center">
        <p>
          <span className="text-xl  sm:text-2xl font-semibold">
            The Moving Train
          </span>{" "}
          <br />
          <span className="text-md">Online Chess Academy</span>
        </p>
        <p className="text-4xl sm:text-6xl text-center font-bold">
          Explore Chess Mastery with Expert Guidance
        </p>
        <p className="text-center">
          we're a journey from novice to mastery. Join us on the tracks of chess
          excellence as we guide you through every move, every strategy, and
          every triumph
        </p>
        <button className="px-4 py-3 bg-[#5E5044] text-white rounded-full">
          Learn Now
        </button>
      </div>
      <div className="mx-auto w-fit">
        <Image
          alt="headerImage"
          src={headerImage}
          width={700}
          height={700}
        ></Image>
      </div>
    </section>
  );
}

export default Header;
