import React from "react";
import { IResult } from "../types";
import arrowRight from "../assets/images/arrowRight.svg";

interface IPersonListProps {
  persons: IResult[];
  onClick: (person: IResult) => void;
}

const PersonList: React.FC<IPersonListProps> = ({ persons, onClick }) => {
  return (
    <>
      {persons.map((person, index) => (
        <div key={person.id.value || index} className="result-list">
          <img
            className="result-avatar"
            src={person.picture.thumbnail}
            alt="avatar"
          />
          <p className="result-info">
            {person.name.first}, {person.dob.age}
          </p>
          <img
            className="result-arrow"
            src={arrowRight}
            alt="arrow"
            onClick={() => onClick(person)}
          />
        </div>
      ))}
    </>
  );
};

export default PersonList;
