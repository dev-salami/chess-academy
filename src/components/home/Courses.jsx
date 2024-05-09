"use client";
import { courses } from "@/data";
import React from "react";
import CourseCard from "../cards/CourseCard";

function Courses() {
  return (
    <section id="courses" className="bg-[#F5EFE7] pt-16 mt-20">
      <div className="mx-auto container px-5 py-10">
        <p className="text-4xl font-semibold mb-6  text-center">
          Our most popular courses
        </p>
        <main className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 p-6  md:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </main>
      </div>
    </section>
  );
}

export default Courses;
