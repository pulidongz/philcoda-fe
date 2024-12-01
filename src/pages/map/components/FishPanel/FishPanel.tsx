import { SubMenu } from 'react-pro-sidebar'
import classname from 'classnames'

import Icon from '../../../../components/Icon'
import HeaderTabs from '../../../../components/HeaderTabs'
import FishRichnessGraph from '../FishAbundanceGraph'
import FishAbundanceGraph from '../FishRichnessGraph'

type FishPanelProps = {
  className?: string
}

const FishPanel = ({ className }: FishPanelProps) => {
  const headers = ['Level 1 (Family)', 'Level 2 (Genus)', 'Level 3 (Species)']
  const panels = [
    <>
      <FishRichnessGraph classification="family" />
      <FishAbundanceGraph classification="family" />
    </>,
    <>
      <FishRichnessGraph classification="genus" />
      <FishAbundanceGraph classification="genus" />
    </>,
    <>
      <FishRichnessGraph classification="species" />
      <FishAbundanceGraph classification="species" />
    </>
  ]
  return (
    <>
      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="file-text" />} label="Summary" defaultOpen>
        <div className="summaryContent">
          <div className="title">
            <p>Region</p>
            <p>Province</p>
            <p>City / Municipality</p>
            <p>Barangay</p>
            <p>Coordinates</p>
            <p>Site Name</p>
          </div>
          <div className="value">
            <p>Southwestern Tagalog Region</p>
            <p>Palawan</p>
            <p>El Nido</p>
            <p>Aberawan</p>
            <p>11.157200, 119.437683</p>
            <p>Site A</p>
          </div>
        </div>
      </SubMenu>

      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="bar-chart-2" />} label="Data" defaultOpen>
        <HeaderTabs className="headerTabs" headers={headers} panels={panels} />
      </SubMenu>

      <SubMenu
        className={classname('subMenu', className)}
        icon={<Icon kind="archive" />}
        label="Historical Data"
        defaultOpen>
        <div className="summaryContent">Fish historical data {'>'} 5 years - downloadable content</div>
      </SubMenu>
    </>
  )
}

export default FishPanel
