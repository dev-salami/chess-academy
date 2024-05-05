"use client";

import { testimonials } from "@/data";
import React, { useRef } from "react";
import TestimonialCard from "../cards/TestimonialCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonial() {
  const scrollRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  return (
    <section
      id="testimonial"
      className="max-w-[1536px] mx-auto px-10 py-20 mt-28 bg-[#F5EFE7]"
    >
      <div className="flex justify-between">
        <div></div>
        <p className=" text-2xl sm:text-4xl font-semibold mb-6  text-center">
          Testimonials
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => handleScroll(-200)}
            className="text-[#5E5044] hover:bg-[#5E5044] hover:text-white duration-500 rounded-full border h-10 w-10 border-[#5E5044] flex items-center justify-center "
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll(200)}
            className="text-[#5E5044] hover:bg-[#5E5044] hover:text-white duration-500 rounded-full border h-10 w-10 border-[#5E5044] flex items-center justify-center "
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className=" gap-6 flex md:grid md:grid-cols-3 overflow-x-auto  duration-500  rounded-md"
        // style={{ scrollbarWidth: "none" }}
        style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
      >
        {/* Your content here */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-60 w-fit mb-4 text-sm lg:text-base flex-none"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
        {/* {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex-none w-64 h-32 bg-blue-200">
            {`Item ${index + 1}`}
          </div>
        ))} */}
      </div>

      {/* <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </main> */}
    </section>
  );
}

export default Testimonial;
