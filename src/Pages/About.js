import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Hero.module.css";
import "./About.css"
const About = () => {
    return ( 
    <Fragment>
   <section style={{ marginTop: "80px" }} className={`bg-dark p-5`}>
        <div className="container">
          <div className="d-grid">
            <div className="row justify-content-between">
              <div className="col-sm-12 col-lg-2 d-flex flex-column ">
             
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
      <div className="mx-auto about_p">
             
              <h2>Our Values</h2>
              <p>
              We acknowledge that the responsibility we have taken is big, and we have to ensure that our members are on the right pathway. To fulfill this duty effectively, our team believes majorly in these core values:
              <ul className="values">
                  <li>Empathy</li>
                  <li>Unity</li>
                  <li>Sincerity</li>
                  <li>Excellence</li>
                  <li>Honesty</li>
              </ul>
              </p>
          
              <h2>Our Mission</h2>
              <p>
              To empower over 5 million students persuing secondary and higher education across Pakistan through their professional development according to international standards. 
              </p>
              <h2>Our Vision</h2>
              <p>
              To enable our youth to be fit for competing internationally.
              </p>
          </div>
   </Fragment>
     );
}
 
export default About;