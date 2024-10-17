import React, { useState } from "react";
import "./FilterDestination.css";
import forwardIcon from "../../public/svg/forward.svg";
import backwardIcon from "../../public/svg/backward.svg";
import hideIcon from "../../public/svg/hide.svg";
import expandIcon from "../../public/svg/expand.svg";
import RangeTimeInput from "../RangeTimeInput/RangeTimeInput";
import classNames from "classnames";

const FilterDestination = ({ forward, children }) => {
  const [isExpand, setIsExpand] = useState(true);

  const destinationContainerClass = classNames("destination-container", {
    "destination-backward": !forward,
    "destination-notExpanded": !isExpand,
  });

  const destinationRangesContainer = classNames("destination-rangesContainer", {
    hidden: !isExpand,
  });

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className={destinationContainerClass}>
      <div className="destination-titleContainer">
        <img
          className="titleContainer-destinationImg"
          src={forward ? forwardIcon : backwardIcon}
          alt="destination"
        />
        <h3 className="titleContainer-title">{children}</h3>
        <img
          className="titleContainer-expander"
          src={isExpand ? hideIcon : expandIcon}
          alt="expander"
          onClick={handleExpand}
        />
      </div>
      <div className={destinationRangesContainer}>
        <div className="destination-fromContainer">
          <h4 className="fromContainer-title">Время отбытия</h4>
          <RangeTimeInput />
        </div>
        <div className="destination-toContainer">
          <h4 className="toContainer-title">Время прибытия</h4>
          <RangeTimeInput />
        </div>
      </div>
    </div>
  );
};

export default FilterDestination;
