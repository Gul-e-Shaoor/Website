import { useContext, useRef, useState } from "react";
import AuthContext from "../Store/Auth-Context";
import "./NewStudentForm.scss";
import { validPhoneNumber, validNoOfSiblings } from "../RegEx/regex";
export const getObjId = async (email) => {
  const data = await fetch(
    `https://gul-e-shaoor-default-rtdb.firebaseio.com/Users.json?orderBy="email"&equalTo="${email}"`
  );
  const result = await data.json();
  console.log(Object.keys(result)[0]);
  return Object.keys(result)[0];
};

const NewStudentForm = (props) => {
  const [phoneNumberErr, setPhoneNumberErr] = useState(false);
  const [phoneNumMotherErr, setPhoneNumMotherErr] = useState(false);
  const [phoneNumFatherErr, setPhoneNumFatherErr] = useState(false);
  const [noOfSiblingsErr, setNoOfSiblingsErr] = useState(false);
  const [orderOfBirthErr, setOrderOfBirthErr] = useState(false);
  const validate = () => {};
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mothersContact, setMothersContact] = useState("");
  const [fathersContact, setFathersContact] = useState("");
  const [mothersJob, setMothersJob] = useState("");
  const [fathersJob, setFathersJob] = useState("");
  const [noOfSiblings, setNoOfSiblings] = useState("");
  const [birthOrder, setBirthOrder] = useState("");
  const [educationalBack, setEducationalBack] = useState("");
  const [matricPercent, setMatricPercent] = useState("");
  const [fscPercent, setFscPercent] = useState("");
  const [degYear, setDegYear] = useState("");
  const [guardianSalary, setGuardianSalary] = useState("");
  const [firstYearPercent, setFirstYearPercent] = useState("");
  const [ninthPercent, setNinthPercent] = useState("");
  const [adress, setAdress] = useState({
    city: "",
    state: "",
    zip: "",
  });

  const authCtx = useContext(AuthContext);
  const email = authCtx.email;
  console.log(email);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const finalAdress = {
      ...adress,
      street1: street1.street1,
      street2: street2.street2,
    };
    const id = async () => getObjId(email);
    console.log(id);
    console.log(phoneNumberErr);
    if (phoneNumberErr && phoneNumMotherErr && phoneNumFatherErr) {
      console.log("invalid Phone Number format");
    } else {
      fetch(
        `https://gul-e-shaoor-default-rtdb.firebaseio.com/Users/${id}/PersonalData.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            name,
            age,
            phoneNumber,
            mothersContact,
            fathersContact,
            mothersJob,
            fathersJob,
            noOfSiblings,
            birthOrder,
            educationalBack,
            matricPercent,
            fscPercent,
            degYear,
            guardianSalary,
            firstYearPercent,
            ninthPercent,
            finalAdress,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
        } else {
          res.json().then((data) => {
            console.log(data);
          });
        }
      });
      props.appMan();
    }
  };

  const nameChangeHandler = (e) => {
    const val = e.target.value;
    setName(val);
  };
  const ageChangeHandler = (e) => {
    const val = e.target.value;
    setAge(val);
  };
  const phoneNumberHandler = (e) => {
    const val = e.target.value;
    if (!validPhoneNumber.test(val)) {
      setPhoneNumberErr(true);
    }
    if (validPhoneNumber.test(val)) {
      setPhoneNumberErr(false);
    }
    setPhoneNumber(val);
  };

  const motherPhoneChangeHandler = (e) => {
    const val = e.target.value;
    if (!validPhoneNumber.test(val)) {
      setPhoneNumMotherErr(true);
    }
    if (validPhoneNumber.test(val)) {
      setPhoneNumMotherErr(false);
    }
    setMothersContact(val);
  };
  const mothersJobChangeHandler = (e) => {
    const val = e.target.value;
    setMothersJob(val);
  };
  const fathersPhoneChangeHandler = (e) => {
    const val = e.target.value;
    if (!validPhoneNumber.test(val)) {
      setPhoneNumFatherErr(true);
    }
    if (validPhoneNumber.test(val)) {
      setPhoneNumFatherErr(false);
    }
    setFathersContact(val);
  };
  const fathersJobChangeHandler = (e) => {
    const val = e.target.value;
    setFathersJob(val);
  };
  const siblingChangeHandler = (e) => {
    const val = e.target.value;
    console.log(val);
    if (!validNoOfSiblings.test(val)) {
      setNoOfSiblingsErr(true);
    } else if (validPhoneNumber.test(val)) {
      setNoOfSiblingsErr(false);
    }
    setNoOfSiblings(val);
  };
  const birthOrderChangeHandler = (e) => {
    const val = e.target.value;
    if (!validNoOfSiblings.test(val)) {
      setOrderOfBirthErr(true);
      console.log("Wrong Siblings");
    } else if (validPhoneNumber.test(val)) {
      setOrderOfBirthErr(false);
      console.log("Correct Siblings");
    }
    setBirthOrder(val);
  };
  const educationChangeHandler = (e) => {
    const val = e.target.value;
    setEducationalBack(val);
  };
  const ninthChangeHandler = (e) => {
    const val = e.target.value;
    setNinthPercent(val);
  };
  const matricChangeHandler = (e) => {
    const val = e.target.value;
    setMatricPercent(val);
  };
  const recentYearChangeHandler = (e) => {
    const val = e.target.value;
    setDegYear(val);
  };
  const firstYearChangeHandler = (e) => {
    const val = e.target.value;
    setFirstYearPercent(val);
  };
  const fscChangeHandler = (e) => {
    const val = e.target.value;
    setFscPercent(val);
  };
  const guardianSalaryChangeHandler = (e) => {
    const val = e.target.value;
    setGuardianSalary(val);
  };
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipRef = useRef(null);
  const adressHandler = () => {
    if (cityRef.current && stateRef.current && zipRef.current) {
      setAdress((prevState) => {
        return {
          ...prevState,
          city: cityRef.current.value,
          state: stateRef.current.value,
          zip: zipRef.current.value,
        };
      });
    }
  };
  const street1ChangeHandler = (e) => {
    const val = e.target.value.trim();
    console.log(val);
    setStreet1((prevState) => {
      return { ...prevState, street1: val };
    });
  };
  const street2ChangeHandler = (e) => {
    const val = e.target.value;
    setStreet2((prevState) => {
      return { ...prevState, street2: val };
    });
  };
  return (
    <div
      style={{
        marginRight: "20px",
        marginBottom: "10px",
        backgroundColor: "rgb(34, 40, 49)",
        color: "#eee",
        fontFamily: "Lato",
        borderRadius: "10px",
      }}
      className="p-4"
    >
      <form className="container" onSubmit={formSubmitHandler}>
        <h1 className="text-center">Profile Data</h1>
        <div className="row">
          <div className="col m-3">
            <label className="fw-bold h5">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              onChange={nameChangeHandler}
              required
            />
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              aria-label="Age"
              onChange={ageChangeHandler}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col m-3">
            <div className="d-flex flex-column">
              <label className="fw-bold h5">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                aria-label="phone number"
                onChange={phoneNumberHandler}
                required
              />
              {phoneNumberErr && (
                <div className="phone">Your Phone number is not correct</div>
              )}
            </div>
          </div>
          <div className="col m-3">
            <label className="fw-bold h5">Number of Siblings</label>
            <input
              type="text"
              class="form-control"
              placeholder="Number of Siblings"
              aria-label=""
              onChange={siblingChangeHandler}
              required
            />
            {noOfSiblingsErr && (
              <div className="phone">please write a number between 0-10</div>
            )}
          </div>
        </div>
        <div class="row">
          <div class="col m-3">
            <label className="fw-bold h5">Father's Phone Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Father's Phone Number"
              aria-label="Father's Phone Number"
              onChange={fathersPhoneChangeHandler}
              required
            />
            {phoneNumFatherErr && (
              <div className="phone">Your Phone number is not correct</div>
            )}
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">Mother's Phone Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Mother's Phone Number"
              aria-label="Mother's Phone Number"
              onChange={motherPhoneChangeHandler}
              required
            />
            {phoneNumMotherErr && (
              <div className="phone">Your Phone number is not correct</div>
            )}
          </div>
        </div>
        <div class="row">
          <div class="col m-3">
            <label className="fw-bold h5">Father's Profession</label>
            <input
              type="text"
              class="form-control"
              placeholder="Fathers Profession"
              aria-label="Fathers Profession"
              onChange={fathersJobChangeHandler}
              required
            />
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">Mother's Profession</label>
            <input
              type="text"
              class="form-control"
              placeholder="Mothers Profession"
              aria-label="Mothers Profession"
              onChange={mothersJobChangeHandler}
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col m-3">
            <label className="fw-bold h5">Order of Birth</label>
            <input
              type="number"
              class="form-control"
              placeholder="Order of Birth"
              aria-label=""
              onChange={birthOrderChangeHandler}
              required
            />
            {orderOfBirthErr && (
              <div className="phone">
                Please write a number between range 1-10
              </div>
            )}
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">Educational Background</label>
            <select
              class="form-select"
              aria-label=""
              onChange={educationChangeHandler}
              required
            >
              <option value="">Educational Background</option>
              <option>Matriculation/ O Levels</option>
              <option>FSc./ A Levels</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col m-3">
            <label className="fw-bold h5">Matriculation Percentage</label>
            <input
              type="number"
              class="form-control"
              placeholder="Matriculation Percentage"
              aria-label=""
              onChange={matricChangeHandler}
              required
            />
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">FSc. Percentage</label>
            <input
              type="number"
              class="form-control"
              placeholder="FSc. Percentage"
              aria-label=""
              onChange={fscChangeHandler}
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col m-3">
            <label className="fw-bold h5">Recent Degree Year</label>
            <input
              type="number"
              class="form-control"
              placeholder="Recent Degree Year"
              aria-label=""
              onChange={recentYearChangeHandler}
              required
            />
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">Guardian Salary</label>
            <input
              type="number"
              class="form-control"
              placeholder="Guardian Salary"
              aria-label=""
              onChange={guardianSalaryChangeHandler}
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col m-3">
            <label className="fw-bold h5">Address 1</label>
            <input
              type="text"
              class="form-control"
              placeholder="Adress 1"
              aria-label=""
              onChange={street1ChangeHandler}
              required
            />
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">Address 2</label>
            <input
              type="text"
              class="form-control"
              placeholder="Adress 2"
              aria-label=""
              onChange={street2ChangeHandler}
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col-md-5 m-3">
            <label className="fw-bold h5">City</label>
            <input
              ref={cityRef}
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="City"
              onChange={adressHandler}
              required
            />
          </div>
          <div class="col-md-4 m-3">
            <label className="fw-bold h5">State</label>
            <select
              ref={stateRef}
              id="inputState"
              class="form-select"
              onChange={adressHandler}
              required
            >
              <option value="">State</option>
              <option>Punjab</option>
              <option>Balochistan</option>
              <option>Sindh</option>
              <option>Khyber Pakhtunkhwa</option>
              <option>Gilgit Baltistan</option>
              <option>Kashmir</option>
            </select>
          </div>
          <div class="col-md-2 m-3">
            <label className="fw-bold h5">ZIP</label>
            <input
              ref={zipRef}
              type="text"
              class="form-control"
              id="inputZip"
              placeholder="ZIP"
              onChange={adressHandler}
              required
            />
          </div>
        </div>
        <div className="row">
          <div class="col m-3">
            <label className="fw-bold h5">1st Year Percentage</label>
            <input
              type="number"
              class="form-control"
              placeholder="1st Year Percentage"
              aria-label=""
              onChange={firstYearChangeHandler}
              required
            />
          </div>
          <div class="col m-3">
            <label className="fw-bold h5">9th Percentage</label>
            <input
              type="number"
              class="form-control"
              placeholder="9th Percentage"
              aria-label=""
              onChange={ninthChangeHandler}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-outline-light my-4"
            style={{ width: "100px" }}
            onClick={validate}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewStudentForm;
