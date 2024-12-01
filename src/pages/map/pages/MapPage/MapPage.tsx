import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, WMSTileLayer, LayersControl, GeoJSON, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import axios from 'axios'

import useMapLayerContext from '../../../../contexts/MapLayerContext/useMapLayerContext'

import LeftSidebar from '../../../../pages/map/components/LeftSidebar'
import RightSidebar from '../../../../pages/map/components/RightSidebar'
import MapFlyToLocation from '../../../../pages/map/components/MapFlyToLocation'
import { Site } from '../../../../contexts/MapLayerContext/MapLayerContext'

// const karagatanURL = 'http://167.86.124.21:8080/geoserver/karagatan/wms'
const philcomarsURL = 'http://202.90.159.74:8080/geoserver/philcomars/wms'

const MapPage = () => {
  const { resultPoints, setSite } = useMapLayerContext()

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'http://202.90.159.74:8080/geoserver/philcomars/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=philcomars%3A20180125_reg_boundary&maxFeatures=50&outputFormat=application%2Fjson'
      )
      setData(response.data)
    }

    getData()
  }, [])

  const sidebarStyles = {
    display: 'flex',
    height: '100vh',
    minHeight: '400px',
    backgroundColor: '#319795'
  }

  return (
    <div style={sidebarStyles}>
      <LeftSidebar />
      <main style={{ paddingLeft: 5, width: '100%' }}>
        <MapContainer
          center={[12.599512, 121.984222]}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: '100vh', width: '100%' }}>
          <TileLayer
            attribution='© <a href="https:/www.geoportal.gov.ph">Geoportal Philippines</a>'
            url="http://basemapserver.geoportal.gov.ph/tiles/v2/PGP/{z}/{x}/{y}.png"
          />
          <LayersControl position="topright" collapsed={true}>
            <LayersControl.BaseLayer name="NAMRIA">
              <TileLayer
                attribution='© <a href="https:/www.geoportal.gov.ph">Geoportal Philippines</a>'
                url="http://basemapserver.geoportal.gov.ph/tiles/v2/PGP/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer checked name="Google Maps">
              <TileLayer
                attribution='© Google <a href="https://developers.google.com/maps/terms">Terms of Use</a>'
                url="http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="ESRI World Imagery">
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="ESRI World Street Map">
              <TileLayer
                attribution="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012"
                url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>

            {/* <LayersControl.Overlay checked name="National Integrated Protected Areas System">
              <WMSTileLayer
                url={karagatanURL}
                layers="karagatan:Protected Areas"
                version="2.15.1"
                transparent={true}
                format="image/png"
                crossOrigin="anonymous"
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Kalayaan Island Group">
              <WMSTileLayer
                url={karagatanURL}
                layers="karagatan:kalayaanisgroup"
                version="2.15.1"
                transparent={true}
                format="image/png"
                crossOrigin="anonymous"
              />
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Philippine Extended Continental Shelf">
              <WMSTileLayer
                url={karagatanURL}
                layers="PhilECS"
                version="2.15.1"
                transparent={true}
                format="image/png"
                crossOrigin="anonymous"
              />
            </LayersControl.Overlay> */}
            <LayersControl.Overlay checked name="Mangrove">
              {data && (
                <GeoJSON key="1" attribution="Mangrove (BlueCARES)" data={data} pathOptions={{ color: 'red' }} />
              )}
            </LayersControl.Overlay>

            <LayersControl.Overlay name="Municipal Boundaries (Philcomars)">
              <WMSTileLayer
                url={philcomarsURL}
                layers="philcomars:20180122_municity_boundary"
                version="1.1.0"
                transparent={true}
                format="image/png"
                crossOrigin="anonymous"
              />
            </LayersControl.Overlay>
          </LayersControl>

          {/* !TODO: Insert trigger functions i.e. zoom to searched locations, show graphs, tables, etc*/}
          {/* Fly to location of first result */}
          {resultPoints.length > 0 && <MapFlyToLocation coordinate={resultPoints[0].point} />}

          {/* Show map results */}
          <MarkerClusterGroup>
            {resultPoints.length > 0 &&
              resultPoints.map((result: Site, i) => (
                <Marker
                  position={result.point}
                  eventHandlers={{
                    click: () => {
                      if (setSite) {
                        setSite(result)
                      }
                    }
                  }}>
                  <Popup>
                    <div>{i} point result</div>
                  </Popup>
                </Marker>
              ))}
          </MarkerClusterGroup>
        </MapContainer>
      </main>
      <RightSidebar />
    </div>
  )
}

export default MapPage
