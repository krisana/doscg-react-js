import React from 'react'
import { withScriptjs } from 'react-google-maps'
import Layout from '../layouts'
import { GoogleMaps } from '../components'

export default function Map({ children }) {
  const MapLoader = withScriptjs(GoogleMaps)

  return (
    <Layout>
      <h1>Map</h1>
      <MapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=[Your API Key]"
        loadingElement={<div style={{ height: '100%' }} />}
      />
    </Layout>
  )
}
