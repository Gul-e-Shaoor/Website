import React from "react";
import { useState } from "react";
import { Fragment } from "react";
// import { Link } from "react-router-dom";
import styles from "../Styles/Services.module.scss";
import image1 from "../Images/mentorship.jpg";
import image2 from "../Images/entertainment.jpg";
import image3 from "../Images/support.jpg";
import image4 from "../Images/opportunity.jpg";
import image5 from "../Images/counselling.jpg";
import LetteredAvatar from "react-lettered-avatar";
const Services = () => {
  const [pic, setPic] = useState(1);

  const list = [
    { id: 1, url: image1, name: "M", info: "Mentorship" },
    { id: 2, url: image2, name: "E", info: "Entertainment" },
    { id: 3, url: image3, name: "S", info: "Support" },
    { id: 4, url: image4, name: "O", info: "Opportunity" },
    { id: 5, url: image5, name: "C", info: "Career Counselling" },
  ];

  // const clickHandler = (e) => {
  //   console.log(e.target.value);
  //   setPic(e.target.value);
  // };

  return (
    <Fragment>
      <section
        className="bg-light p-5 text-dark"
        style={{ fontFamily: "Lato" }}
      >
        <div className="container py-5 ">
          <div className="display-3 text-center">Our Services</div>

          <div className={`${styles.bodyCard} my-5`}>
            <div className={`${styles.options}`}>
              {list.map((x) => {
                return (
                  <div
                    key={x.id}
                    value={x.id}
                    className={`${styles.option} ${
                      pic === x.id ? styles.active : ""
                    }`}
                    onClick={() => setPic(x.id)}
                    style={{
                      background: `url(${x.url})`,
                      backgroundSize: "auto 100%",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className={`${styles.shadow}`}></div>
                    <div className={`${styles.label}`}>
                      <div className={`${styles.icon}`}>
                        <LetteredAvatar
                          name={x.name}
                          size={41}
                          backgroundColor="#fafafa"
                        />
                      </div>
                      <div className={`${styles.info}`}>
                        <div className={`${styles.main}`}>{x.info}</div>
                        <div className={`${styles.sub}`}>
                          Omuke trughte a otufta
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
