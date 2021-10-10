import React from "react";
import { Link } from "react-router-dom";
const Support = () => {
  return (
    <div>
      <div className="bg-dark" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center flex-column align-items-center h-100 text-center">
          <h1 className="display-3 text-center py-5 text-light">
            What's next?
          </h1>
          <div className="text-light w-75" style={{ lineHeight: "1.5rem" }}>
            GuleShaoor is always there to provide assistance in getting over the
            obstacles on your professional development journey. To equip you
            with the best resources needed to achieve your goal, we have:
          </div>
        </div>
      </div>
      <div className="container text-dark" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-center flex-column align-items-center h-100 text-center">
          <div className="display-5 text-center my-4">GuleShaoor Community</div>
          <div className="text-center w-75 py-3">
            Our community is far reaching and every member is very emphatic and
            helpful. Community members are not just students from secondary and
            higher education sector but also the Alumni of different
            universities across Pakistan, PhDs, Certified Career Counsellors,
            Industry Experts and inspiring personalities not just from Pakistan
            but from across the globe, all together making it an enough package
            for all the career concerns and strongly believe in our core values
            . You can not only connect with them personally on messenger through
            group, but can also share your concerns publicaly in post or comment
            for valuable and logical suggestions. Moreover, you can get
            referrals needed for job, information about university admissions
            criteria, fee structure, programs, life, interview tips and recieve
            career opportunities including not just jobs, but scholarships,
            fellowships and internships too.
          </div>
          <div className="text-primary h5">
            What are you waiting for? Join Now!
          </div>
          <div className="text-center my-4">
            <a
              href="https://www.facebook.com/groups/400723168283519/?ref=share"
              className="btn btn-lg btn-outline-dark"
              target="_blank"
              rel="noreferrer"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light">
        <div className="container" style={{ height: "100vh" }}>
          <div className="d-flex justify-content-center flex-column align-items-center h-100 text-center mx-4">
            <div className="display-4 my-5 ">Support Portal</div>
            <div className="h4 text-start my-3 ">
              Your career choices are sorted but there are some other problems
              hindering your way?
            </div>
            <div className="h6 text-center  my-3">
              No issues! Whatever it is, either educational funding required for
              continuing studies, require undergraduate mentor to assist
              regarding university, or your parents don't support your choices,
              GuleShaoor has a way out.
            </div>
            <div className="h6 text-center my-3">
              Along with it's profound community, it has linked up with multiple
              university students as student guides and ambassadors for your
              guidance about university admission criteria, application process,
              fee structure info, programs and University life. It also has
              connections and collaborators with organizations that can help you
              regarding scholarships and funding
            </div>
          </div>
        </div>
      </div>
      <div className="text-dark">
        <div className="container py-5">
          <div className="d-flex justify-content-center flex-column align-items-center text-center mx-4">
            <div className="h5 text-start text-success my-3 mx-4">
              Fill the form below with your name of institution, regarding all
              your concerns and GuleShaoor will consult one to one meeting with
              respective organization/perosn that comes up with a solution and
              will get back to you soon
            </div>
            <div className="row d-flex justify-content-center g-2 mx-4">
              <div className="col-sm-12">
                <label className="form-label mt-5" style={{ fontSize: "110%" }}>
                  Q. Explain in details what problems you are facing ?
                </label>
                <textarea
                  className="form-control mb-5 mt-2"
                  rows="5"
                  placeholder="Chalen moqa to mila, Khair mein apni Zindagi se ......."
                  required
                ></textarea>
              </div>
              <div className="col-sm-12" style={{ fontSize: "110%" }}>
                <label className="form-label mt-5">
                  Q. What kind of help do you want from us?
                </label>
                <textarea
                  className="form-control mb-5 mt-2"
                  rows="5"
                  placeholder="tabdeeli aye ge nahe tabdeeli agaye he...."
                  required
                ></textarea>
              </div>
            </div>
            <div className="btn btn-outline-light">Submit</div>
            <div className="display-5 text-center mx-4 mt-5 mb-2">
              Something missing?
            </div>
            <div className="display-5 text-center mx-4 my-2">
              Yeah! Give me a tour to{" "}
            </div>
            <div className="my-4">
              <Link className="btn btn-outline-success mx-2" to="/mentorship">
                Mentorship
              </Link>
              <Link
                className="btn btn-outline-success mx-2"
                to="/personalitydev"
              >
                Personality Development
              </Link>
              <Link
                className="btn btn-outline-success mx-2"
                to="/entertainment"
              >
                Entertainment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
