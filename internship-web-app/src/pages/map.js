import { Container } from "../components/styles/Container.styled"
import { Logo } from "../components/styles/Logo.styled"

import { useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Bonus = () => {
  return (
      <>
      <Container>
          <h2>Mapa</h2>
          <MapContainer center={[50.769, 15.058]} zoom={13} style={{ height: "600px" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            <Marker position={[50.773, 15.064]}>
              <Popup>
                <Logo src="./MP2021-22_Svoboda-Ondrej_Sjednoceni-uzivatelskych-rozhrani-www-aplikaci-PraCe-a-PraXe/images/logo.svg" alt="PSLIB logo">PSLIB.</Logo>
              </Popup>
            </Marker>
          </MapContainer>
      </Container>
      </>
  )
}

export default Bonus