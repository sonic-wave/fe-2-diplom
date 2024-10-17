import React, { useState, useEffect, useRef } from "react";
import "./RangeTimeInput.css";

const RangeTimeInput = ({ min = 0, max = 24 }) => {
  const [range, setRange] = useState({ minValue: 0, maxValue: 24 });

  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const displayValOneRef = useRef(null);
  const displayValTwoRef = useRef(null);

  const formatTime = (value) => {
    return `${value}:00`;
  };

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
    let minGap = 1;
    let sliderTrack = sliderTrackRef.current;

    function slideOne() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
      }
      displayValOne.textContent = formatTime(sliderOne.value);
      fillColor();
    }

    function slideTwo() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
      }
      displayValTwo.textContent = formatTime(sliderTwo.value);
      fillColor();
    }

    function fillColor() {
      let percent1 = ((range.minValue - min) / (max - min)) * 100;
      let percent2 = ((range.maxValue - min) / (max - min)) * 100;
      sliderTrack.style.background = `linear-gradient(to right, transparent ${percent1}% , #FFA800 ${percent1}% , #FFA800 ${percent2}%, transparent ${percent2}%)`;
    }

    slideOne();
    slideTwo();
  }, [range, min, max]);

  return (
    <div className="range-container">
      <div className="timeSlider">
        <div className="timeSlider-track" ref={sliderTrackRef}></div>
        <input
          type="range"
          value={range.minValue}
          onChange={handleMinChange}
          min={min}
          max={max}
          step={1}
          ref={sliderOneRef}
        />
        <input
          type="range"
          value={range.maxValue}
          onChange={handleMaxChange}
          min={min}
          max={max}
          step={1}
          ref={sliderTwoRef}
        />
      </div>
      <div className="timeValues">
        <span ref={displayValOneRef}>1920</span>
        <span ref={displayValTwoRef}>7000</span>
      </div>
    </div>
  );
};

export default RangeTimeInput;
