import React from "react";
import aboutImage10 from "../../../public/images/academy/academyPic1.svg";
import aboutImage1 from "../../../public/images/academy/academyPic2.svg";
import aboutImage3 from "../../../public/images/academy/academyPic3.svg";
import aboutImage4 from "../../../public/images/academy/academyPic4.svg";
import aboutImage5 from "../../../public/images/academy/academyPic5.svg";
import aboutImage6 from "../../../public/images/academy/academyPic6.svg";
import aboutImage7 from "../../../public/images/academy/academyPic7.svg";
import aboutImage8 from "../../../public/images/academy/academyPic8.svg";
import aboutImage9 from "../../../public/images/academy/academyPic9.svg";
// import aboutImage10 from "../../../public/images/academy/academyPic10.svg";
import aboutImage11 from "../../../public/images/academy/academyPic11.svg";
import Image from "next/image";

function AboutUs() {
  return (
    <section id="about-us" className="text-center container mx-auto px-6 pt-40">
      <p className="text-4xl font-semibold ">About Us</p>
      <p className=" my-6">
        The Moving Train Online Academy offers top-notch chess education,
        fostering lifelong passion and skills. Our expert instruction cultivates
        strategic thinking, problem-solving, and sportsmanship to prepare
        players for success in chess and life.
      </p>
      <button className="px-4 py-3 mb-10 bg-[#5E5044] text-white rounded-full">
        Learn Now
      </button>
      <div>
        <div className="flex justify-center ">
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] "
            src={aboutImage1}
            width={70}
            height={70}
          ></Image>
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage3}
            width={70}
            height={70}
          ></Image>
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage4}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage5}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage6}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage7}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage8}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage9}
            width={70}
            height={70}
          ></Image>{" "}
          <Image
            alt="aboutImage"
            className="rounded-full w-[50px] md:w-[70px] -ml-3"
            src={aboutImage10}
            width={70}
            height={70}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
