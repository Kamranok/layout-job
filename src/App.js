import React from 'react';
import "./App.css";
import Attractions from './components/Attractions';
import LocationForm from './components/LocationForm';
import Locations from './components/Locations';
import MoreLocations from './components/MoreLocations';

export default function App() {
  return (
    <React.Fragment>
      <div className="container">
        <LocationForm />
        <Attractions />
        <Locations />
        <MoreLocations />
      </div>
    </React.Fragment>
  );
}
