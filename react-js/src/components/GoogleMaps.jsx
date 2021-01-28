import React, { useState, useEffect } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps'

export default function GoogleMaps({ children }) {
  const [directions, setDirections] = useState(null)
  useEffect(() => {
    const google = window.google
    const directionsService = new google.maps.DirectionsService()
    const origin = { lat: 13.8234866, lng: 100.5081204 }
    const destination = { lat: 13.7465971, lng: 100.5371214 }
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          console.log(result)
          setDirections(result)
        } else {
          console.error(`error fetching directions ${result}`)
        }
      }
    )
  }, [])

  const GoogleMapExample = withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}
    >
      <DirectionsRenderer
        directions={directions}
      />
    </GoogleMap>
  ))

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: '500px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%', width: '100%' }} />}
      />
    </div>
  )
}
