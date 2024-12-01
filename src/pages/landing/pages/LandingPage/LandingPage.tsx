import { Link } from 'react-router-dom'

import NavBar from '../../../../components/NavBar'
import Button from '../../../../components//Button'
import LocationSearchForm from '../../../../pages/map/components/LocationSearchForm'

import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.searchBox}>
        <img src=" /landing/hingacu-logo.svg" alt="Hingacu"></img>
        <p className={styles.subText}>
          Search an area or location to view available mangrove, seagrass, reef, fish and coastline data.
        </p>
        <LocationSearchForm />
        <Link to={'/map'}>
          <Button icon="map">Map View</Button>
        </Link>
      </div>
    </>
  )
}

export default LandingPage
