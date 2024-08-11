"use client";
import { events } from "@/data";
import React from "react";
import EventCard from "../cards/EventCard";

function Events() {
  return (
    <section id="events" className="container mx-auto px-6  ">
      <p className="text-4xl font-semibold my-8  text-center">
        News and Events{" "}
      </p>

      <main className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 items-end lg:grid-cols-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </main>
    </section>
  );
}

export default Events;
