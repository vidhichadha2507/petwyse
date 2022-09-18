import './App.css';
import{useState} from 'react'
import { GoogleMap, useJsApiLoader,Marker,DistanceMatrixService} from '@react-google-maps/api';
import React from 'react';
const containerStyle = {
  width: '50%',
  height: '500px'
};
function App() {

  const [lati,setLati]=useState(51.5072)
  const [longi,setLongi]=useState(-0.1276)
  const [distance, setdistance] = useState(0)
  const [duration, setduration] = useState(0)
  const watchID = navigator.geolocation.getCurrentPosition((position) => {
    setLati(position.coords.latitude)
    setLongi(position.coords.longitude)
  });
  const center = {lat:lati,lng:longi}
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyApjdYiuTXmzZdNhzLWOc0fMGplLSjn2Qc"
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [center])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <Marker key="marker_1"

position={{

    lat:lati,

    lng:longi

}}


/>
<pan
  lat={lati}
  lng={longi}
/>
<DistanceMatrixService
 options={{
           destinations: [{lat:1.296788, lng:103.778961}],
           origins: [{lng:103.780267, lat:1.291692}],
           travelMode: "DRIVING",
         }}
 callback = {(response) => {
  setdistance(response.rows[0].elements[0].distance.text)
  setduration(response.rows[0].elements[0].duration.text)
  console.log(distance)
  console.log(duration)
 }}
/>
    </GoogleMap>
    
) : <></>
}


export default React.memo(App)
