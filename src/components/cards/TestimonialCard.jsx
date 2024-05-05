import { truncateText } from "@/utils";
import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="shadow-md shadow-gray-700 border border-gray-400 p-4 rounded-xl">
      <div className="flex items-center gap-2">
        <div>{testimonial.image}</div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p>{testimonial.title}</p>
        </div>
      </div>
      <p className="mt-4">{truncateText(testimonial.text, 300)}</p>
    </div>
  );
}

export default TestimonialCard;
