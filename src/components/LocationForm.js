import React from 'react';
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowUp,
  FaDotCircle,
  FaEllipsisV,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPlusCircle
} from "react-icons/fa";

const LocationForm = () => {
  return (
    <React.Fragment>
      <div className="form-container grid-container">
        <div className="back-sign">
          <FaArrowLeft />
        </div>
        <div className="switch-sign">
          <FaDotCircle size=".8em" />
          <FaEllipsisV size=".8em" />
          <FaMapMarkerAlt size=".8em" />
        </div>
        <div>
          <form>
            <input className="Current Location" value="Current Location" />
            <input
              className="choose-destination"
              placeholder="Choose destination"
            />
          </form>
        </div>
        <div className="arrow-switch">
          <FaArrowUp />
          <FaArrowDown />
        </div>
      </div>
      <div className="destination-container grid-container">
        <div className="add-sign">
          <FaPlusCircle />
        </div>
        <div className="description">Use Add your current location</div>
        <div className="signal-sign">
          <FaLocationArrow size=".8em" />
        </div>
        <div className="signal-description">Use your current location</div>
      </div>
    </React.Fragment>
  );
};

export default LocationForm;
