import React, { useState } from "react";
import styles from "./style.module.css";
const Case2 = ({ active, setActive }) => {
  const [inputVal, setInputVal] = useState(0);
  const sendData = async () => {
    await fetch(
      `https://blindit-c5213-default-rtdb.firebaseio.com/ROI_Data.json`,
      {
        method: "POST",
        body: JSON.stringify(inputVal),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };
  const onNextHandler = () => {
    sendData();
    setActive((prevState) => prevState + 1);
  };

  const onBackHandler = () => {
    setActive((prevState) => prevState - 1);
  };
  return (
    <>
      <div className={`titleBg py-4 text-white fw-bold text-center`}>
        Meeting Minutes for Integrated Concurrent Engineering (ICE)
      </div>
      <div className="container p-5">
        <h4 className={`lightGrey fw-normal`}>ROI Question</h4>
        <p className="fs-3">How many clash reports do you do a year?</p>
        <div className="my-4 mb-5">
          <input
            type="number"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className={`form-control w-25 ${styles.customInput}`}
          />
        </div>
        <div>
          <button
            type="button"
            className="backBtn btn py-2 px-4"
            onClick={onBackHandler}
          >
            Back
          </button>
          <button
            type="button"
            className="nextBtn btn py-2 px-4 ms-3"
            onClick={onNextHandler}
          >
            Next Use Case
          </button>
        </div>
      </div>
    </>
  );
};

export default Case2;
