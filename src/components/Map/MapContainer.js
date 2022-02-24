import React, { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5zaHVsOTgyNiIsImEiOiJja3pqbGxkb3Qxdmw5MnBvMHY0YW5zcngzIn0.alRQGd4qh-EpyyFhwHph5g";

function MapContainer() {
  const [viewState, setViewState] = useState({
    latitude: 22.7196,
    longitude: 75.8577,
    zoom: 12,
  });
  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: 800, height: 600, margin: 20 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={22.7411} latitude={75.8512} anchor="bottom">
        <LocationOnRoundedIcon fontSize="large" />
      </Marker>
      <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
    </Map>
  );
}

export default MapContainer;