import React, { useState, useEffect, useRef } from "react";
import "./RangeInput.css";

const RangeInput = ({ min, max }) => {
  const [range, setRange] = useState({ minValue: min, maxValue: max });

  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const displayValOneRef = useRef(null);
  const displayValTwoRef = useRef(null);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= range.maxValue) {
      setRange({ ...range, minValue: value });
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= range.minValue) {
      setRange({ ...range, maxValue: value });
    }
  };

  useEffect(() => {
    let sliderOne = sliderOneRef.current;
    let sliderTwo = sliderTwoRef.current;
    let displayValOne = displayValOneRef.current;
    let displayValTwo = displayValTwoRef.current;
    let minGap = 0;
    let sliderTrack = sliderTrackRef.current;

    function slideOne() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = sliderOne.value;
      fillColor();
    }
    function slideTwo() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = sliderTwo.value;
      fillColor();
    }
    function fillColor() {
      let percent1 = ((range.minValue - min) / (max - min)) * 100;
      let percent2 = ((range.maxValue - min) / (max - min)) * 100;
      sliderTrack.style.background = `linear-gradient(to right, transparent ${percent1}% , #FFA800 ${percent1}% , #FFA800 ${percent2}%, transparent ${percent2}%)`;
    }
    slideOne();
    slideTwo();
  }, [range]);

  return (
    <div className="range-container">
      <div className="slider">
        <div className="slider-track" ref={sliderTrackRef}></div>
        <input
          type="range"
          value={range.minValue}
          onChange={handleMinChange}
          min={min}
          max={max}
          ref={sliderOneRef}
        />
        <input
          type="range"
          value={range.maxValue}
          onChange={handleMaxChange}
          min={min}
          max={max}
          ref={sliderTwoRef}
        />
      </div>
      <div className="values">
        <span ref={displayValOneRef}>1920</span>
        <span ref={displayValTwoRef}>7000</span>
      </div>
    </div>
  );
};

export default RangeInput;
