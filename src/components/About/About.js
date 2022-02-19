import React, { useState, useEffect } from "react";
import Map from "../Map/Map";
import "./About.css";

function About(props) {
  const [coords, setCoords] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  return (
    <div>
      <Map setCoords={setCoords} coords={coords} />
    </div>
  );
}

export default About;
