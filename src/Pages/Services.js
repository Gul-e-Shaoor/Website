import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
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
    {
      id: 1,
      url: image1,
      name: "M",
      info: "Mentorship",
      details:
        "We offer totally unpaid mentorships from experienced mentors, guiding you in your affairs and showing you what path to chose.",
      to: "/mentorship",
    },
    {
      id: 2,
      url: image2,
      name: "E",
      info: "Entertainment",
      details:
        "We believe in All work and no play makes Jack a dull boy At our platform, you'll get entertainment along with mentorship, and that way you'll never lose interest.",
      to: "/entertainment",
    },
    {
      id: 3,
      url: image3,
      name: "S",
      info: "Support",
      details:
        "We have a good package for your support in form of a community as well as Consultation portal for other issues as well. Check now!.",
      to: "/support",
    },
    {
      id: 4,
      url: image4,
      name: "O",
      info: "Opportunity",
      details:
        "Your personality speaks for you like nothing else. Here, we shall groom your personality, teach you soft skills and help you boost your confidence. You shall face the world with a new and unique approach.",
      to: "/personalitydev",
    },
    {
      id: 5,
      url: image5,
      name: "C",
      info: "Career Counselling",
      details:
        "Choosing a career is one of the most significant decisions you'll ever come across. Our career counselors shall help and guide you in choosing the right career by your attitude and interests..",
      to: "/careerCounselling",
    },
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
        <div className="py-5 ">
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
                    }}
                  >
                    <div className={`${styles.shadow}`}></div>
                    <Link to={x.to}>
                      <div className={`${styles.text} text-light px-3 pt-5`}>
                        <div>{x.details}</div>
                      </div>
                    </Link>
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
