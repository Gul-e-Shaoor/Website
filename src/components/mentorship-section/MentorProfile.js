import { Link } from "react-router-dom";
const MentorProfile = () => {
  return (
    <div className="col-sm-4 text-center">
      <Link
        to="/mentorProfilePage"
        className="text-dark fw-bold"
        style={{ textDecoration: "none" }}
      >
        <div className="avatar mx-auto"></div>
        <p className="py-3">John Doe</p>
      </Link>
    </div>
  );
};

export default MentorProfile;
