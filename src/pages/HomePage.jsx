import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SlideBar from "../components/SlideBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SlideBar />
      <Hero>
        {" "}
        <Link
          to="/product"
          className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600"
        >
          Get Started
        </Link>
      </Hero>
    </>
  );
};

export default HomePage;
