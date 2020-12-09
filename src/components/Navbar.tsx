import React from "react";
import ArrowLeft from "../assets/images/arrowLeft.svg";

interface INavbarProps {
  isDetail: boolean;
  onBack: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ isDetail, onBack }) => {
  return (
    <div className={`navbar${isDetail ? " detail" : ""}`}>
      {isDetail && (
        <img
          src={ArrowLeft}
          alt="arrow-left"
          className="navbar-left-arrow"
          onClick={onBack}
        />
      )}
      <h2 className="screen-title">{isDetail ? "My Profile" : "Profiles"}</h2>
      {!isDetail && (
        <div className="navbar-menu">
          <div className="menu-border" />
          <div className="menu-border" />
          <div className="menu-border" />
        </div>
      )}
    </div>
  );
};
export default Navbar;
