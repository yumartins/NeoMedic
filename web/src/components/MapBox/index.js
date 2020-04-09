import React, { useState } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = 'pk.eyJ1IjoieXVtYXJ0aW5zIiwiYSI6ImNqam45cXIwMDFtZzMza3M0bnlvMzVrcWsifQ.KHCF7HgUdrQKWMB0hTtq8A';

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const MapBox = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 600,
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  const onViewportChange = (viewport) => setViewPort({...viewport, transitionDuration: 3000 });

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      mapStyle="mapbox://styles/yumartins/cjy3h75rr2okn1cr9ug0qwkfi"
      onViewportChange={onViewportChange}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      />
    </MapGL>
  );
};

export default MapBox;
