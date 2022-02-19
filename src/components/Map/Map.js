import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { useMediaQuery } from '@material-ui/core';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  // const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAtk_oLb16CbCZoptAa2rAAOuB9xn4g12w" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;