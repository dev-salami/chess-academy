import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="shadow-md">
      <div className="flex items-center gap-2">
        <div>{testimonial.image}</div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p>{testimonial.title}</p>
        </div>
      </div>
      <p className="text-clip truncate h-40">{testimonial.text}</p>
    </div>
  );
}

export default TestimonialCard;
