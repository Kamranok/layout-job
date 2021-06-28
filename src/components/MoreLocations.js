import React from 'react';
import { FaCamera, FaMapMarkerAlt } from "react-icons/fa";

const MoreLocations = () => {
  return (
    <React.Fragment>
      <div className="morelocation-container grid-container">
        <div className="buss-logo">
          <FaCamera size="1.8em" />
        </div>
        <div className="heading bottom-border">
          <h2>Time Square</h2>
          <p>12 E 23rd St, New York, NY</p>
        </div>
      </div>
      <div className="morelocation-container grid-container">
        <div className="buss-logo">
          <FaMapMarkerAlt size="1.8em" />
        </div>
        <div className="heading bottom-border">
          <h2>Central Park</h2>
          <p>12 E 23rd St, New York, NY</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoreLocations;
