import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../Pages/Services";
import Header from "../components/Header";
import Mentors from "../components/Mentors";
import CareerCounsellors from "../components/CareerCounsellors";
import Collaboration from "./Collaboration";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Header />
      <Mentors />
      <section className="bg-dark text-light">
        <CareerCounsellors />
      </section>
      <Collaboration />
    </div>
  );
};

export default Home;
