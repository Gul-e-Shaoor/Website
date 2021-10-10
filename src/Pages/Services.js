import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Services.module.css";
const Services = () => {
  return (
    <Fragment>
      <section
        className="bg-light p-5 text-dark"
        style={{ fontFamily: "Lato" }}
      >
        <div className="container py-5 ">
          <div className="text-center">
            <p className="mt-5">We have got your back for any problem you face regarding your careers and educational matters. GuleShaoor is here to help you equip with the best resources for your concerns. It bridges the gap between what youth demands and what is needed to fulfill the needs. </p>
            <h2>
            Our Community 
            </h2>
            <p>
            Our community is far-reaching. It includes undergraduates/postgraduates and industrial professionals from different fields, together making it a whole for all the student and career concerns. You can not only connect with them individually but also share your concerns publically in the community to have valuable and logical suggestions from everyone. Wait no more, link up with this community now. 
            </p>
            <h2>
            Have Concerns? 
            </h2>
            <p>
            Your career choices are sorted but there are some other problems that are stopping to excel? No issues!  Whether it is money problem and you need funding or your parents do not support your choices GuleShaoor has a way out. Along with its profound community, it has linked up with multiple organizations that can help regarding the scholarships and funding. Fill the form writing about all your concerns and GuleShaoor will consult one-to-one to the respective expert that comes up with a solution for you. 
            </p>
          </div>
          <div className="display-2 text-center">Our Services</div>
          <div className="row py-5 justify-content-center gx-3 gy-3">
            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className={`${styles.cardAnimation} card h-100 shadow`}>
                <img
                  src={require("../Images/mentorship.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    We offer totally unpaid mentorships from experienced mentors, guiding you in your affairs and showing you what path to chose.
                  </div>
                  <Link to="/mentorship" className="btn btn-outline-dark my-3">
                    Mentorship
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div className={`${styles.cardAnimation} card h-100 shadow`}>
                <img
                  src={require("../Images/counselling.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Choosing a career is one of the most significant decisions youll ever come across. Our career counselors shall help and guide you in chosing the right career in accordance with your aptitue and interests.
                  </div>
                  <Link
                    to="/careerCounselling"
                    className="btn btn-outline-dark my-3"
                  >
                    Career Counselling
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className={`${styles.cardAnimation} card h-100 shadow`}>
                <img
                  src={require("../Images/opportunity.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                  Your personality speaks for you like nothing else. Here, we shall groom your personality, teach you soft skills and help you boost your confidence. You shall face the world with a new and unique approach.
                  </div>
                  <Link
                    to="/personalitydev"
                    className="btn btn-outline-dark my-3"
                  >
                    Personality Development 
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className={`${styles.cardAnimation} card h-100 shadow`}>
                <img
                  src={require("../Images/support.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    Our system shall prove an interactive platform where you will get to collaborate with teachers, mentors and students like yourself.
                  </div>
                  <Link
                    to="/collaboration"
                    className="btn btn-outline-dark my-3"
                  >
                    Collaboration
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className={`${styles.cardAnimation} card h-100 shadow`}>
                <img
                  src={require("../Images/entertainment.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="card-text my-2">
                    We believe in "All work and no play makes Jack a dull boy". At our platform, you'll get entertainment along with mentorship, and that way you'll never lose interest.
                  </div>
                  <Link
                    to="/entertainment"
                    className="btn btn-outline-dark my-3"
                  >
                    Entertainment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
