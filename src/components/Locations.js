import React from 'react';
import { FaBus, FaHeart, FaRegFlushed } from "react-icons/fa";

const Locations = () => {
  return (
    <React.Fragment>
      <div className="location-container grid-container">
        <div className="buss-logo">
          <FaBus size="1.5em" />
        </div>
        <div className="round-logo">
          <FaHeart size="1.5em" />
        </div>
        <div className="heading bottom-border">
          <h2>Port Authority</h2>
          <p>8th Ave btwn 42nd St & 43rd St, in front of...</p>
          <div>
            <button className="location-btn primary-red">Downtown Tour</button>
            <button className="location-btn primary-green">
              BrooKlyn Tour
            </button>
          </div>
          <div>
            <button className="location-btn primary-blue">
              Uptown & Herlem Tour
            </button>
            <button className="location-btn primary-purple">Night Tour</button>
          </div>
        </div>
      </div>

      <div className="location-container grid-container">
        <div className="buss-logo">
          <FaBus size="1.5em" />
        </div>
        <div className="round-logo">
          <FaHeart size="1.5em" />
        </div>
        <div className="heading bottom-border">
          <h2>Time Square West</h2>
          <p>46th St btwn 7th Ave & 8th Ave, of 8th...</p>
          <div>
            <button className="location-btn primary-red">Downtown Tour</button>
          </div>
          <button className="location-btn primary-blue">
            Uptown & Herlem Tour
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Locations;
