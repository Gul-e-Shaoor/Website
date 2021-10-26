import React, { useEffect } from "react";
import Header from "../components/career-section/Header";
import CareerProfilesGrid from "../components/career-section/CareerProfilesGrid";
const CareerCounselling = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-5 mt-3">
      <Header />
      <CareerProfilesGrid />
    </div>
  );
};

export default CareerCounselling;
