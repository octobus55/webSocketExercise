import React from "react";
import { IResult } from "../types";
import GoogleMap from "./GoogleMap";
import femaleGender from "../assets/images/female-gender-sign.svg";
import maleGender from "../assets/images/male-gender.svg";
import AgeBar from "./AgeBar";

interface IPersonDetailProps {
  person: IResult;
}

const PersonDetail: React.FC<IPersonDetailProps> = ({ person }) => {
  const fullName = `${person.name.first} ${person.name.last}`;

  const isFemale = person.gender === "female";
  return (
    <div className="detail-container">
      <div className="detail-header-container">
        <img
          src={person.picture.large}
          alt="avatar"
          className="detail-avatar"
        />
        <div className="name-container">
          <p className="label">Name</p>
          <p className="name-text">{fullName}</p>
        </div>
      </div>
      <GoogleMap coordinates={person.location.coordinates} />

      <div className="detail-footer-container">
        <div className="gender-container">
          <p className="label title">Name</p>
          <img
            className="gender"
            src={isFemale ? femaleGender : maleGender}
            alt="gender"
          />
        </div>

        <div className="age-container">
          <p className="label title">Age</p>
          <AgeBar age={person.dob.age} />
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
