import { useEffect, useMemo } from 'react'
import { SubMenu } from 'react-pro-sidebar'
import { faker } from '@faker-js/faker'
import { useSearchParams } from 'react-router-dom'
import { isEqual, get } from 'lodash'
import classname from 'classnames'

import capitalizeEachWord from '../../../../utils/capitalize-each-word'
import useCoastalIntegrityData from '../../../../services/useCoastalIntegrityData'
import useMapLayerContext from '../../../../contexts/MapLayerContext/useMapLayerContext'

import Icon from '../../../../components/Icon'
import SwipeView from '../../../../components/SwipeView'
import FetchingPanel from '../../../../components/FetchingPanel'

import SurveySummary from '../SurveySummary'
import BeachProfileGraph from '../graphs/BeachProfileGraph'
import HistoricalDataDownloader from '../HistoricalDataDownloader'
import { Site } from '../../../../contexts/MapLayerContext/MapLayerContext'

/**
 * How Coastal Integrity Panel works:
 * - A successful autocomplete search appends the URL params: brgy, city, province, loc.
 * - useEffect hook triggers fetching of data using the provided URL params.
 * - The response is then displayed in the panel.
 */

type CoastalIntegrityPanelProps = {
  className?: string
}

const CoastalIntegrityPanel = ({ className }: CoastalIntegrityPanelProps) => {
  const [searchParams] = useSearchParams()
  const { handleResultPoints, site } = useMapLayerContext()
  const { GetBeachProfileSummary } = useCoastalIntegrityData()

  // Obtain URL params
  const { brgy, city, province } = Object.fromEntries(searchParams.entries())
  const { data, isLoading } = GetBeachProfileSummary({ brgy, city, province })

  const coordinates: Site[] = useMemo(() => {
    return data
      ? data.map(item => {
          return {
            pk: item.pk,
            point: [item.lat, item.lon]
          }
        })
      : []
  }, [data])

  // Set the initial point in map after search autocomplete
  useEffect(() => {
    if (coordinates.length > 0) {
      handleResultPoints(coordinates)
    }
  }, [coordinates, handleResultPoints])

  const mediaImages = () => {
    const images = []
    for (let i = 0; i < 10; i++) {
      images.push(<img src={faker.image.url()} alt="pic" />)
    }
    return images
  }

  const getSummaryData = () => {
    // if has data
    if (coordinates.length > 0) {
      if (site) {
        return data?.filter(s => isEqual([s.lat, s.lon], site.point) && s.pk === site.pk)?.[0]
      } else {
        // Show first data as default, if no site is selected
        return data?.[0]
      }
    } else {
      return undefined
    }
  }

  const rPk = getSummaryData() ? get(getSummaryData(), 'pk')?.toString() : undefined
  const rProv = getSummaryData() ? capitalizeEachWord(get(getSummaryData(), 'province')) : ''
  const rCity = getSummaryData() ? capitalizeEachWord(get(getSummaryData(), 'city')) : ''
  const rBrgy = getSummaryData() ? capitalizeEachWord(get(getSummaryData(), 'barangay')) : ''
  const rSiteName = getSummaryData() ? capitalizeEachWord(get(getSummaryData(), 'site_name')) : ''

  if (isLoading) return <FetchingPanel />

  if (!data || data.length === 0) {
    return (
      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="file-text" />} label="Summary" defaultOpen>
        <p className="noData">No data available</p>
      </SubMenu>
    )
  }

  return (
    <>
      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="file-text" />} label="Summary" defaultOpen>
        <div className="summaryContent">
          <div className="title">
            <p>Province</p>
            <p>City / Municipality</p>
            <p>Barangay</p>
            <p>Site Name</p>
          </div>
          <div className="value">
            <p>{rProv}</p>
            <p>{rCity}</p>
            <p>{rBrgy}</p>
            <p>{rSiteName}</p>
          </div>
        </div>
        <SurveySummary pk={rPk} />
      </SubMenu>

      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="bar-chart-2" />} label="Data" defaultOpen>
        <div className="summaryContent">
          <BeachProfileGraph pk={rPk} />
        </div>
      </SubMenu>

      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="image" />} label="Media" defaultOpen>
        <div className="summaryContent">
          <SwipeView>{mediaImages()}</SwipeView>
        </div>
      </SubMenu>

      <SubMenu
        className={classname('subMenu', className)}
        icon={<Icon kind="archive" />}
        label="Historical Data"
        defaultOpen>
        <div className="summaryContent">
          <HistoricalDataDownloader />
        </div>
      </SubMenu>
    </>
  )
}

export default CoastalIntegrityPanel
