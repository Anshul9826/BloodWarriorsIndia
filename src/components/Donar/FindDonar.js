import React from "react";
import MapContainer from "../Map/MapContainer";
import Donars from "./Donars";

function FindDonar() {
  return (
    <div className="d-flex">
        <MapContainer />
        <Donars/>
    </div>
  );
}

export default FindDonar;
