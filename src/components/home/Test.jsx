"use client";
import { testimonials } from "@/data";
import React, { useRef } from "react";
import TestimonialCard from "../cards/TestimonialCard";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Test = () => {
  const scrollRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div>
        <div></div>
        <p>Testimonial</p>
        <div className="flex gap-5">
          <button
            onClick={() => handleScroll(-100)}
            className="text-[#5E5044] hover:bg-[#5E5044] hover:text-white duration-500 rounded-full border h-10 w-10 border-[#5E5044] flex items-center justify-center "
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll(100)}
            className="text-[#5E5044] hover:bg-[#5E5044] hover:text-white duration-500 rounded-full border h-10 w-10 border-[#5E5044] flex items-center justify-center "
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto border duration-500 border-gray-200 rounded-md"
          // style={{ scrollbarWidth: "none" }}
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {/* Your content here */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-96 flex-none">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
          {/* {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="flex-none w-64 h-32 bg-blue-200">
            {`Item ${index + 1}`}
          </div>
        ))} */}
        </div>
      </div>
    </>
  );
};

export default Test;
