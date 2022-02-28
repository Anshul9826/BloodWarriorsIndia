import React, { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const style = {
  width: 800,
  height: 600,
  flex: 1,
  margin: 20,
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW5zaHVsOTgyNiIsImEiOiJja3pqbGxkb3Qxdmw5MnBvMHY0YW5zcngzIn0.alRQGd4qh-EpyyFhwHph5g";

function MapContainer() {
  const [viewState, setViewState] = useState({
    latitude: 22.719568,
    longitude: 75.857727,
    zoom: 12,
  });
  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={style}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={22.7177451} latitude={75.8664262} anchor="bottom"> 
      <div><img src="./favicon.png" alt="" style={{width:"20px"}}/></div>     
      </Marker>
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
    </Map>
  );
}

export default MapContainer;
