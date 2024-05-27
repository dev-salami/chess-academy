"use client";
import { tutors } from "@/data";
import React from "react";
import TutorCard from "../cards/TutorCard";

function Tutors() {
  return (
    <section className="pt-32" id="tutors">
      <p className="text-4xl font-semibold mb-10  text-center">
        Meet Our Team Leaders
      </p>
      <main className="grid grid-cols-1 gap-x-6 gap-y-16 px-8 md:grid-cols-2">
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </main>
    </section>
  );
}

export default Tutors;
