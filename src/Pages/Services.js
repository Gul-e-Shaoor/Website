import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Services.module.scss";
const Services = () => {
  const [pic, setPic] = useState(false);
  return (
    <Fragment>
      <section
        className="bg-light p-5 text-dark"
        style={{ fontFamily: "Lato" }}
      >
        <div className="container py-5 ">
          <div className="display-2 text-center">Our Services</div>
          <div className="row py-5 justify-content-center gx-lg-5 gx-md-2 gy-5">
            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div
                className={`${styles.cardAnimation} card shadow`}
                style={{ height: "90%" }}
              >
                <img
                  src={require("../Images/mentorship.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className="my-2" style={{ fontSize: "0.9rem" }}>
                    We offer totally unpaid mentorships from experienced
                    mentors, guiding you in your affairs and showing you what
                    path to chose.
                  </div>
                  <Link
                    to="/mentorship"
                    className="btn btn-outline-dark my-4"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Mentorship
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 ">
              <div
                className={`${styles.cardAnimation} card  shadow`}
                style={{ height: "90%" }}
              >
                <img
                  src={require("../Images/counselling.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className=" my-2" style={{ fontSize: "0.9rem" }}>
                    Choosing a career is one of the most significant decisions
                    you'll ever come across. Our career counselors shall help
                    and guide you in choosing the right career by your attitude
                    and interests.
                  </div>
                  <Link
                    to="/careerCounselling"
                    className="btn btn-outline-dark my-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Career Counselling
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div
                className={`${styles.cardAnimation} card  shadow`}
                style={{ height: "90%" }}
              >
                <img
                  src={require("../Images/opportunity.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className=" my-2" style={{ fontSize: "0.9rem" }}>
                    Your personality speaks for you like nothing else. Here, we
                    shall groom your personality, teach you soft skills and help
                    you boost your confidence. You shall face the world with a
                    new and unique approach.
                  </div>
                  <Link
                    to="/personalitydev"
                    className="btn btn-outline-dark my-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Personality Development
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div
                className={`${styles.cardAnimation} card  shadow`}
                style={{ height: "90%" }}
              >
                <img
                  src={require("../Images/support.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className=" my-2" style={{ fontSize: "0.9rem" }}>
                    We have a good package for your support in form of a
                    community as well as Consultation portal for other issues as
                    well. Check now!.
                  </div>
                  <Link
                    to="/support"
                    className="btn btn-outline-dark my-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div
                className={`${styles.cardAnimation} card  shadow`}
                style={{ height: "90%" }}
              >
                <img
                  src={require("../Images/entertainment.jpg").default}
                  alt=""
                  className="img-fluid card-img-top"
                />
                <div className="card-body text-center">
                  <div className=" my-2" style={{ fontSize: "0.9rem" }}>
                    We believe in "All work and no play makes Jack a dull boy".
                    At our platform, you'll get entertainment along with
                    mentorship, and that way you'll never lose interest.
                  </div>
                  <Link
                    to="/entertainment"
                    className="btn btn-outline-dark my-3"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Entertainment
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.bodyCard}`}>
            <div className={`${styles.options}`}>
              <div
                className={`${styles.option} ${pic ? styles.active : ""}`}
                onClick={() => setPic(!pic)}
              >
                <div className={`${styles.shadow}`}></div>
                <div className={`${styles.label}`}>
                  <div className={`${styles.icon}`}>
                    <i className="fas fa-walking"></i>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={`${styles.main}`}>Blonkisoaz</div>
                    <div className={`${styles.sub}`}>
                      Omuke trughte a otufta
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.option}`}>
                <div className={`${styles.shadow}`}></div>
                <div className={`${styles.label}`}>
                  <div className={`${styles.icon}`}>
                    <i className="fas fa-walking"></i>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={`${styles.main}`}>Blonkisoaz</div>
                    <div className={`${styles.sub}`}>
                      Omuke trughte a otufta
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.option}`}>
                <div className={`${styles.shadow}`}></div>
                <div className={`${styles.label}`}>
                  <div className={`${styles.icon}`}>
                    <i className="fas fa-walking"></i>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={`${styles.main}`}>Blonkisoaz</div>
                    <div className={`${styles.sub}`}>
                      Omuke trughte a otufta
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.option}`}>
                <div className={`${styles.shadow}`}></div>
                <div className={`${styles.label}`}>
                  <div className={`${styles.icon}`}>
                    <i className="fas fa-walking"></i>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={`${styles.main}`}>Blonkisoaz</div>
                    <div className={`${styles.sub}`}>
                      Omuke trughte a otufta
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.option}`}>
                <div className={`${styles.shadow}`}></div>
                <div className={`${styles.label}`}>
                  <div className={`${styles.icon}`}>
                    <i className="fas fa-walking"></i>
                  </div>
                  <div className={`${styles.info}`}>
                    <div className={`${styles.main}`}>Blonkisoaz</div>
                    <div className={`${styles.sub}`}>
                      Omuke trughte a otufta
                    </div>
                  </div>
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
