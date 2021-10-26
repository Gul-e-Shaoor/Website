import React, { useEffect } from "react";
import Header from "../components/mentorship-section/Header";
import MentorProfilesGrid from "../components/mentorship-section/MentorProfilesGrid";
const Mentorship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-5 mt-3">
      <Header />
      <MentorProfilesGrid />
    </div>
  );
};

export default Mentorship;
