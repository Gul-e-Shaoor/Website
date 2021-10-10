import About from "./About";
import { Link } from "react-router-dom";
import { openPopupWidget } from "react-calendly";
const ProfilePage = () => {
  const ButtonHandler = () => {
    openPopupWidget({
      url: `https://calendly.com/sessionviaguleshaoor`,
    });
  };
  return (
    <div
      className="container p-5 mt-5"
      style={{ width: "100%", maxWidth: "850px" }}
    >
      <div className="row m-0 pt-5">
        <div className="profile-image col-md-5 mx-auto mb-md-0 mb-4"></div>
        <p className="col-md-7 d-flex flex-column justify-content-center mx-auto text-center fst-italic lh-lg fw-bold">
          "I am highly elated to be part of this group of like minded people who
          are interested in advancing the SDG'S which would help to impact
          positively on the lives of people. I believe that ignorance is never a
          solution to a problem hence it's needed for all to be knowledgeable"
        </p>
      </div>
      <About />
      <div className="my-4 d-flex justify-content-between align-content-center">
        <Link to="/mentorship" className="btn btn-outline-dark">
          Back to Mentors Page
        </Link>
        <button
          type="button"
          class="btn btn-outline-dark"
          onClick={ButtonHandler}
        >
          Be My Mentor
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
