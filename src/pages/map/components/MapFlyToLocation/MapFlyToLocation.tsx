import { LatLngExpression } from 'leaflet'
import { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

type MapFlyToLocationProps = {
  coordinate?: LatLngExpression
}
const MapFlyToLocation = ({ coordinate }: MapFlyToLocationProps) => {
  const map = useMap()
  const [position, setPosition] = useState<LatLngExpression | null>(null)

  useEffect(() => {
    if (coordinate) {
      map.flyTo(coordinate, 16).on('zoomend', () => {
        setPosition(coordinate)
      })
    }
  }, [coordinate, map])

  return position === null ? null : (
    <>
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </>
  )
}

export default MapFlyToLocation
