import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React from "react";
const containerStyle = {
  width: "90%",
  height: "500px",
  marginTop: "50px",
};
function Maps() {
  const [lati, setLati] = useState(51.5072);
  const [longi, setLongi] = useState(-0.1276);
  const watchID = navigator.geolocation.getCurrentPosition((position) => {
    setLati(position.coords.latitude);
    setLongi(position.coords.longitude);
  });
  const center = { lat: lati, lng: longi };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyApjdYiuTXmzZdNhzLWOc0fMGplLSjn2Qc",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        key="marker_1"
        position={{
          lat: lati,

          lng: longi,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
