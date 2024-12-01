import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import FetchingPanel from '../src/components/FetchingPanel'
import { MapLayerProvider } from '../src/contexts/MapLayerContext'

import './styles/globals.css'
import './styles/variables.css'
import './styles/typeography.css'
import 'leaflet/dist/leaflet.css'
import './App.css'

const SUB_DIRECTORY = ''

const queryClient = new QueryClient()

// Pages available
const MapPage = lazy(() => import('../src/pages/map/pages/MapPage'))
const AboutTheProjectPage = lazy(() => import('../src/pages/about-the-project/AboutTheProjectPage'))
const ProjectPartnersPage = lazy(() => import('../src/pages/project-partners/ProjectPartnersPage'))
const DataAccessPage = lazy(() => import('../src/pages/data-access/DataAccessPage'))
const ContactUsPage = lazy(() => import('../src/pages/contact-us/ContactUsPage'))

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MapLayerProvider>
        <Router>
          <Suspense fallback={<FetchingPanel />}>
            <Routes>
              <Route path={`${SUB_DIRECTORY}/`} element={<MapPage />} />
              <Route path={`${SUB_DIRECTORY}/about-the-project`} element={<AboutTheProjectPage />} />
              <Route path={`${SUB_DIRECTORY}/project-partners`} element={<ProjectPartnersPage />} />
              <Route path={`${SUB_DIRECTORY}/data-access`} element={<DataAccessPage />} />
              <Route path={`${SUB_DIRECTORY}/contact-us`} element={<ContactUsPage />} />
            </Routes>
          </Suspense>
        </Router>
      </MapLayerProvider>
    </QueryClientProvider>
  )
}

export default App
