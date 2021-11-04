import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Hero.module.scss";
const Hero = () => {
  return (
    <Fragment>
      <section className={`bg-dark p-5`}>
        <div className={`container ${styles.disp}`}>
          <div className="d-grid" style={{ height: "80%" }}>
            <div className="row justify-content-between align-items-center">
              <div className="col-sm-12 col-lg-6 d-flex flex-column ">
                <div className="py-3">
                  <p className="fw-bold h2 text-light">
                    Empowering youth through capacity building{" "}
                  </p>
                  <p
                    className="fs-6 text-light py-3 "
                    style={{ opacity: "0.8" }}
                  >
                    We nurture young minds towards a productive approach and
                    build their capacity for career development over
                    international standards by fulfilling their need of
                    counselling, mentorship, information, healthy entertainment
                    and a supporting community.
                  </p>
                </div>
                <div className="d-flex justify-content-start align-content-center">
                  <Link
                    to="/careers"
                    className={`${styles.btnText} btn btn-outline-light mx-2 my-4 flex-grow-1`}
                  >
                    <i className="fa fa-graduation-cap mx-2"></i> Careers
                  </Link>
                  <Link
                    to="/auth"
                    // eslint-disable-next-line no-sequences
                    className={`${
                      (styles.btnText, styles.regiter_btn)
                    } btn btn-primary mx-2 my-4 flex-grow-1`}
                  >
                    <i className="fa fa-sign-in mx-2"></i> Register
                  </Link>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <img
                  src={require("../Images/Logo_1.svg").default}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
