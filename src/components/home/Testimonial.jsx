"use client";

import { testimonials } from "@/data";
import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

function Testimonial() {
  return (
    <section id="testimonial" className="container mx-auto px-6 mt-40">
      <p className="text-4xl font-semibold mb-6  text-center">Testimonials</p>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </main>
    </section>
  );
}

export default Testimonial;
