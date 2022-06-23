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
        className={`rangeInput w-100 my-5 `}
      />
      <div className="position-absolute bottom-0 start-50 translate-middle-x itemTop">
        <div className="d-flex">
          <span className="text-center firstItem">
            <div className="active lineSize">|</div>
            <div>1</div>
          </span>
          <span className="text-center ps-5 beginItem">
            <div className="active lineSize">|</div>
            <div>2</div>
          </span>
          <span className="text-center ps-5 beginItem">
            <div className="active lineSize">|</div>
            <div>3</div>
          </span>
          <span className="text-center ps-5 beginItem">
            <div className="active lineSize">|</div>
            <div>4</div>
          </span>
          <span className="text-center ps-5 beginItem">
            <div className="active lineSize">|</div>
            <div>5</div>
          </span>
          <span className="text-center ps-5 endItem">
            <div className="active lineSize">|</div>
            <div>6</div>
          </span>
          <span className="text-center ps-5 endItem">
            <div className="active lineSize">|</div>
            <div>7</div>
          </span>
          <span className="text-center ps-5 endItem">
            <div className="active lineSize">|</div>
            <div>8</div>
          </span>
          <span className="text-center ps-5 endItem">
            <div className="active lineSize">|</div>
            <div>9</div>
          </span>
          <span className="text-center ps-5 lastItem">
            <div className="active lineSize">|</div>
            <div>10</div>
          </span>
        </div>
      </div>
    </>
  );
};

export default InputRange;
