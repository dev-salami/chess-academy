"use client";
import Footer from "@/components/Footer";
import Courses from "@/components/home/Courses";
import Navbar from "@/components/Navbar";
import React from "react";

function CoursesPage() {
  return (
    <>
      <Navbar />
      <Courses />
      <Footer />
    </>
  );
}

export default CoursesPage;
