import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { getObjId } from "../../Pages/NewStudentForm";
import AuthContext from "../../Store/Auth-Context";
import { openPopupWidget } from "react-calendly";

const GoalSetting = (props) => {
  const [answer1, setanswer1] = useState("");
  const [answer2, setanswer2] = useState("");
  const [answer3, setanswer3] = useState("");
  const [answer4, setanswer4] = useState("");
  const [answer5, setanswer5] = useState("");

  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  const id = getObjId(email);
  const ans1ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer1(val);
  };
  const ans2ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer2(val);
  };
  const ans3ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer3(val);
  };
  const ans4ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer4(val);
  };
  const ans5ChangeHandler = (e) => {
    const val = e.target.value.trim();
    setanswer5(val);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://gul-e-shaoor-default-rtdb.firebaseio.com/Users/${id}/GoalSetting.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          answer1,
          answer2,
          answer3,
          answer4,
          answer5,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    props.appMan();
  };
  const buttonHandler = () => {
    openPopupWidget({
      url: `https://calendly.com/sessionviaguleshaoor`,
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#222831",
        color: "#e5e5e5",
        borderRadius: "10px",
      }}
    >
      <div className="display-4 text-center py-4">Tell us about yourself</div>
      <form onSubmit={formSubmitHandler}>
        <div className="row d-flex justify-content-center g-4 mx-2">
          <div className="col-sm-12 col-md-6">
            <label className="form-label mt-5" style={{ fontSize: "110%" }}>
              Q. Agr aap ko moqa diya jae k aap ki zindagi ki koi bhi teen
              khwahishat poori ki jaen gi, aap kya pana chahen ge?
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Chalen moqa to mila, Khair mein apni Zindagi se ......."
              required
              onChange={ans1ChangeHandler}
            ></textarea>
          </div>
          <div className="col-sm-12 col-md-6" style={{ fontSize: "110%" }}>
            <label className="form-label mt-5">
              Q. Aane wale teen salon mein apni shakhsiyat (personality) me kya
              tabdeeli lana chahte hain? (misaal: me mazeed pur-
              itemad/Confident rehna seekhun ga/ge)
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="tabdeeli aye ge nahe tabdeeli agaye he...."
              required
              onChange={ans2ChangeHandler}
            ></textarea>
          </div>
        </div>
        <div className="row d-flex justify-content-center g-4 mx-2">
          <div className="col-sm-12 col-md-6">
            <label className="form-label mt-5" style={{ fontSize: "110%" }}>
              Q. Log ap ko kin khoobiyon ki wja se mutasir karte hain ya ache
              lagte hain? (values)
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Mutasir hona bhe bura nahe lekin mutasir karna alag level he ....."
              required
              onChange={ans3ChangeHandler}
            ></textarea>
          </div>
          <div className="col-sm-12 col-md-6" style={{ fontSize: "110%" }}>
            <label className="form-label mt-5">
              Q. Aap apna faright waqt kis trhan guzarte hyn? (Hobbies)
            </label>
            <textarea
              className="form-control mb-5 mt-2"
              rows="5"
              placeholder="Farigh waqt mein Pubg khelta hn....."
              required
              onChange={ans4ChangeHandler}
            ></textarea>
          </div>
        </div>
        <div
          className="text-center"
          style={{ marginTop: "-20px", paddingTop: "20px" }}
        >
          <button
            className="btn btn-outline-light text center my-4"
            style={{ width: "150px", fontSize: "110%" }}
          >
            Save
          </button>
        </div>
        <div className="row d-flex justify-content-center g-4 mx-2">
          <div className="display-4 text-center py-4">Discover Your Goals</div>
          <div className="col-sm-12">
            <label className="form-label mt-5 fw-bold h5">
              Q. Kya aap ne apna carrier goal set kiya huwa hai?
            </label>
            <div className="h6">Apne Career Goal ke bare mein bataen</div>
            <textarea
              className="form-control mb-2 mt-2"
              rows="5"
              placeholder="Irshaad....."
              required
              onChange={ans5ChangeHandler}
            ></textarea>
            <div className="h6">Alaa!!</div>
            <button className="btn btn-outline-light" onClick={buttonHandler}>
              Assign me a Mentor
            </button>
          </div>
          <div className="col-sm-12 " style={{ fontSize: "110%" }}>
            <div className="d-flex justify-content-between flex-column align-content-center">
              <label className="form-label mt-5">
                Mene abhi apna goal set nai kiya or apna goal explore krne me
                mushkil aa rhi hai.
              </label>
              <button
                className="btn btn-outline-light my-3"
                style={{ width: "282px" }}
                onClick={buttonHandler}
              >
                Schedule Career Counselling session
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GoalSetting;
