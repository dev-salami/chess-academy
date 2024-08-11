"use client";
import Footer from "@/components/Footer";
import Academy from "@/components/home/Academy";
import Events from "@/components/home/Events";
import Navbar from "@/components/Navbar";
import React from "react";

function Gallery() {
  return (
    <>
      <Navbar />
      <Events />
      <Academy />
      <Footer />
    </>
  );
}

export default Gallery;
