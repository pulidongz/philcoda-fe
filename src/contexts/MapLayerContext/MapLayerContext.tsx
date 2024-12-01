import { ReactNode, createContext, useState } from 'react'
import { LatLngExpression } from 'leaflet'

export type Site = {
  pk?: number
  point: LatLngExpression
}

export type MapLayerContextType = {
  // Array of result points to be displayed on the map
  resultPoints: Site[]
  handleResultPoints: (points: Site[]) => void
  // Currently selected site's coordinate in map, and key specific to the site
  site?: Site
  setSite?: (point: Site) => void
}
export const MapLayerContext = createContext<MapLayerContextType>({
  resultPoints: [],
  handleResultPoints: () => {},
  site: undefined,
  setSite: () => {}
})

export const MapLayerProvider = ({ children }: { children: ReactNode }) => {
  const [resultPoints, setResultPoints] = useState<Site[]>([])
  const [site, setSite] = useState<Site | undefined>()

  const handleResultPoints = (points: Site[]) => {
    setResultPoints(points)
  }

  return (
    <MapLayerContext.Provider value={{ resultPoints, handleResultPoints, site, setSite }}>
      {children}
    </MapLayerContext.Provider>
  )
}
