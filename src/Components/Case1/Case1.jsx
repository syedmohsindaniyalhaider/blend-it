import React, { useState } from "react";
import InputRange from "../../UI/InputRange";
const Case1 = ({ active, setActive }) => {
  const [rangeValue, setRangeValue] = useState(0);

  const sendData = async () => {
    await fetch(
      `https://blindit-c5213-default-rtdb.firebaseio.com/RFI_Data.json`,
      {
        method: "POST",
        body: JSON.stringify(rangeValue),
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
        Digital Request For Information (RFI)
      </div>
      <div className="container p-5">
        <h4 className={`lightGrey fw-normal`}>Question 01</h4>
        <p className="fs-3">
          From 1 to 10 rank your current RFI handling practice.
        </p>
        <div className="row">
          <div className="col-12 col-md">
            <p className="fs-5">1 being:</p>
            <p className="lightGrey">
              RFIs are created an d submitted manually through emails and typed
              into a spreadsheet to track response. Tracking is done manually
              and monitoring of incoming request s on RFI is also done by email.
              Replies and mark-ups on 20 drawings in PDF are extracted from
              Revit to make red marking on drawings and re-uploaded into Revit
              after.
            </p>
          </div>
          <div className="col-12 col-md">
            <p className="fs-5">10 being:</p>
            <p className="lightGrey">
              RFIs are created directly from the cloud and linking issues done
              on drawings. Redline directly in the cloud on drawings. Person
              responsible clicks on the notification link for the RFI assigned
              to them. There is a RFI Resolution summary dashboard to allow
              stakeholders to monitor due dates set by stakeholders.
            </p>
          </div>
        </div>
        <div className="row position-relative mb-5">
          <InputRange rangeValue={rangeValue} setRangeValue={setRangeValue} />
        </div>
        <div>
          <button
            type="button"
            className="backBtn btn py-2 px-4"
            onClick={onBackHandler}
            disabled={active === 0 ? true : false}
          >
            Back
          </button>
          <button
            type="button"
            className="nextBtn btn py-2 px-4 ms-3"
            onClick={onNextHandler}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Case1;
