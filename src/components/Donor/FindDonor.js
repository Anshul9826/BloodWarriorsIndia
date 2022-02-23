import React from "react";
import MapContainer from "../Map/MapContainer";
import Donars from "./DonorsList";

function FindDonar() {
  return (
    <div className="d-flex" style={{backgroundColor:"lightsalmon"}}>
        <MapContainer />
      <div className="d-flex flex-column my-2">
        <Donars />
        <Donars />
        <Donars />
        <Donars />
      </div>
    </div>
  );
}

export default FindDonar;
