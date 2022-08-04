import React, {useEffect, useMemo, useState} from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import axios from 'axios'
import './map.css'

const Maps = (props) => {
  const [location, setLocation] = useState([0, 0]);
  const cityy = props.city
  const dest = cityy.replace(/\s/g, '%20').toLowerCase()
  console.log(dest)

  useEffect(() => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dest}.json?access_token=pk.eyJ1IjoiYmV0aDk4YW4iLCJhIjoiY2wzaXRwYnBtMDA3bjNqcDhvcG05Z3N4YyJ9.VHEO6heZljZu6jzliXUzww`)
    .then(resp => setLocation(JSON.parse(JSON.stringify(resp.data.features[0].center))))
    
  }, [])

  console.log(location)
  const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDoQPawEex28bgtWYSZoyBDECy1KHJHWZA"})

  

  if (!isLoaded) return (<div>Loading map...</div>)
  

  return (
      <Map/>
  
  );

  function Map() {
    const center = useMemo(() => ({lat: parseFloat(location[1]), lng: parseFloat(location[0])}),[])
    return(
      <GoogleMap zoom={10} center={center} mapContainerClassName='map' data-testid='map'>
        <Marker position={center}/>
      </GoogleMap>
    );
  }
}

export default Maps
