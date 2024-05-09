import React from "react";
import headerImage from "../../../public/images/others/header.svg";
import flags from "../../../public/images/others/flags.svg";

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
          {`  we're a journey from novice to mastery. Join us on the tracks of chess
          excellence as we guide you through every move, every strategy, and
          every triumph`}
        </p>
        <button className="px-4 py-3 bg-[#5E5044] text-white rounded-full">
          Learn Now
        </button>
      </div>
      <div className="mx-auto mt-10 w-fit flex flex-col-reverse md:flex-row">
        <Image
          alt="headerImage"
          src={headerImage}
          width={500}
          height={500}
        ></Image>
        <div className="flex justify-end">
          <Image
            className=" w-1/3 md:w-full md:-ml-20 -mb-20 md:mb-60 -z-10 "
            alt="flags"
            src={flags}
            width={200}
            height={200}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default Header;
