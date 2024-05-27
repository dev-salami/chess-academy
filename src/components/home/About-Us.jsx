import React from "react";
import kid1 from "../../../public/images/others/kid1.svg";
import kid2 from "../../../public/images/others/kid2.svg";
import lines from "../../../public/images/others/lines.svg";

import aboutImage8 from "../../../public/images/academy/academyPic8.svg";
import aboutImage9 from "../../../public/images/academy/academyPic9.svg";
// import aboutImage10 from "../../../public/images/academy/academyPic10.svg";
import aboutImage11 from "../../../public/images/academy/academyPic11.svg";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="about-us" className="text-center container mx-auto px-6 pt-40">
      <p className="text-4xl font-semibold ">About Us</p>
      <p className=" my-6 max-w-screen-lg px-6 text-lg mx-auto">
        The Moving Train Online Academy offers top-notch chess education,
        fostering lifelong passion and skills. Our expert instruction cultivates
        strategic thinking, problem-solving, and sportsmanship to prepare
        players for success in chess and life.
      </p>
      <a
        href="https://wa.link/uj48gk"
        className="px-4 py-3 mb-10 bg-[#5E5044] text-white rounded-full"
      >
        Learn Now
      </a>
      <div>
        <div className="flex justify-center w-full ">
          <Image
            alt="kid1"
            className="w-[45%] md:w-[25%] -mr-40 z-[1] "
            src={kid1}
            width={100}
            height={100}
          ></Image>{" "}
          <Image
            alt="lines"
            className="w-fit md:w-full "
            src={lines}
            width={400}
            height={400}
          ></Image>{" "}
          <Image
            alt="kid2"
            className="w-[45%] md:w-[25%] -ml-40   z-[1] "
            src={kid2}
            width={100}
            height={100}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
