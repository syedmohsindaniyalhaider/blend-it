import React from "react";
import "./InputRange.css";
const InputRange = ({ rangeValue, setRangeValue }) => {
  return (
    <>
      <input
        value={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
        type="range"
        min={1}
        max={10}
        step={1}
        className="rangeInput my-5"
        list="number"
      />
      <datalist class="rangeList active" id="number">
        <div className="d-flex text-start flex-column ">
          <span className="line">|</span>
          <option>
            <div>1</div>
          </option>
        </div>
        <div className="d-flex text-center flex-column">
          <div className="ms-1 line">|</div>
          <option>2</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className="line">|</div>
          <option>3</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className="line">|</div>
          <option>4</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className=" line">|</div>
          <option>5</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className="line">|</div>
          <option>6</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className="line">|</div>
          <option>7</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className="line">|</div>
          <option>8</option>
        </div>
        <div className="ms-1 d-flex text-center flex-column">
          <div className="line">|</div>
          <option>9</option>
        </div>
        <div className="d-flex text-end flex-column">
          <div className="line">|</div>
          <option>10</option>
        </div>
      </datalist>
    </>
  );
};

export default InputRange;
