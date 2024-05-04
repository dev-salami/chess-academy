import React from "react";
import logo from "../../public/images/others/logo.svg";
import Image from "next/image";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <section id="contact-us" className="grid gap-6 md:grid-cols-4 mb-12 mt-20">
      <div className="flex flex-col gap-6 justify-center items-center">
        <Image src={logo} height={100} width={100}></Image>
        <div className="gap-4 my-2 flex md:hidden justify-center ">
          <a
            href=""
            className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
          >
            <FaSquareInstagram size={25} />
          </a>
          <a
            href=" "
            className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href=" "
            className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href=" "
            className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
          >
            <RiFacebookCircleLine size={25} />
          </a>
        </div>
      </div>
      <div className="flex gap-4 flex-col justify-center items-center">
        <a href="#Home">Home</a>
        <a href="#about">About Us</a>
        <a href="#event">Events</a>
      </div>
      <div className="flex gap-4 flex-col justify-center items-center">
        <a href="#Home">Top tutors</a>
        <a href="#about">testimonials </a>
        <a href="#event"> Academy</a>
        <a href="#event"> Contact</a>
      </div>
      <div className="gap-4 my-2 hidden md:flex justify-center ">
        <a
          href=""
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaSquareInstagram size={25} />
        </a>
        <a
          href=" "
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaFacebook size={25} />
        </a>
        <a
          href=" "
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href=" "
          className="  flex rounded-full bg-white items-center justify-center text-[#0B0804]"
        >
          <RiFacebookCircleLine size={25} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
