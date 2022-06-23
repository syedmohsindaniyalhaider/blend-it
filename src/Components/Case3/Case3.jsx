import React, { useState } from "react";
import styles from "./style.module.css";
const Case3 = () => {
  const [isCheck, setIsCheck] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const sendData = async (userData) => {
    await fetch(
      `https://blindit-c5213-default-rtdb.firebaseio.com/User_Info.json`,
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  const userDetails = {
    firstName: firstName,
    lastName: lastName,
    positionTitle: positionTitle,
    companyName: companyName,
    email: email,
    number: number,
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendData(userDetails);
    setFirstName("");
    setLastName("");
    setPositionTitle("");
    setCompanyName("");
    setEmail("");
    setNumber("");
    setIsCheck(false);
  };
  return (
    <>
      <div className={`titleBg py-3 text-white text-center`}>
        Please provide us with your business contact details so we can send you
        the detailed analysis and
        <br /> recommendations based on your inputs.
      </div>
      <div className="d-flex flex-column align-items-center container p-5">
        <form
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
        >
          <div className="w-md-50 ">
            <div className="row">
              <div className="col-12 col-md">
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className={`${styles.customInput} form-control`}
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className={`${styles.customInput} form-control`}
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md">
                <div className="mb-3">
                  <label className="form-label">Position Title</label>
                  <input
                    type="text"
                    className={`${styles.customInput} form-control`}
                    placeholder="Enter Position Title"
                    value={positionTitle}
                    onChange={(e) => setPositionTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="mb-3">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className={`${styles.customInput} form-control`}
                    placeholder="Enter Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md">
                <div className="mb-3">
                  <label className="form-label">Bussiness Email Address</label>
                  <input
                    type="email"
                    className={`${styles.customInput} form-control`}
                    placeholder="Enter Bussiness Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="number"
                    className={`${styles.customInput} form-control`}
                    placeholder="Enter Contact Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-check form-switch p-0">
              <label className="form-check-label float-start">
                I agree to GDPR Policy:
              </label>
              <input
                className="form-check-input customCheckbox float-end"
                type="checkbox"
                role="switch"
                checked={isCheck}
                onChange={() => setIsCheck((prev) => !prev)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              disabled={isCheck ? false : true}
              className="nextBtn btn py-2 px-5 mt-4 ms-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Case3;
