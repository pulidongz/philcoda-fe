import { useContext } from 'react'
import { MapLayerContextType, MapLayerContext } from './MapLayerContext'

export const useMapLayerContext = () => useContext<MapLayerContextType>(MapLayerContext)

export default useMapLayerContext
