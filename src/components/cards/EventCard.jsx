import React from "react";

function EventCard({ event }) {
  return (
    <div>
      <div className="w-[70%] flex justify-center mx-auto ">{event.image}</div>
      <p className="font-semibold text-center my-2">{event.name}</p>
      <p className="font-medium text-sm text-center">{event.details}</p>
    </div>
  );
}

export default EventCard;
