import React from "react";
import { calculateBarLinesCount } from "../lib/calculateBarLinesCount";

interface IAgeBarProps {
  age: number;
}

const AgeBar: React.FC<IAgeBarProps> = ({ age }) => {
  const barLineCount = calculateBarLinesCount(age);
  const barLineArray = new Array(barLineCount).fill(barLineCount);
  const filledBarPercentage = `${age}%`;
  const emptyBarPercentage = `${100 - age}%`;
  return (
    <div
      className="age-bar-container"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className="age-empty-bar"
        style={{
          height: emptyBarPercentage,
        }}
      >
        <p className="label age-label">{age} yo</p>
      </div>
      <div
        className="age-filled-bar"
        style={{
          height: filledBarPercentage,
        }}
      >
        {barLineArray.map((line, index) => (
          <div className="age-filled-bar-line" key={index} />
        ))}
      </div>
    </div>
  );
};
export default AgeBar;
