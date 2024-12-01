import { SubMenu } from 'react-pro-sidebar'
import classname from 'classnames'

import Icon from '../../../../components/Icon'
import CoverExtentGraph from '../CoverExtentGraph'
import SpeciesCompositionChart from '../SpeciesCompositionChart'

type SeagrassPanelProps = {
  className?: string
}

const SeagrassPanel = ({ className }: SeagrassPanelProps) => {
  return (
    <>
      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="file-text" />} label="Summary" defaultOpen>
        <div className="summaryContent">
          <div className="title">
            <p>Region</p>
            <p>Province</p>
            <p>City / Municipality</p>
            <p>Barangay</p>
            <p>Habitat</p>
            <p>Area</p>
          </div>
          <div className="value">
            <p>Southwestern Tagalog Region</p>
            <p>Palawan</p>
            <p>El Nido</p>
            <p>Aberawan</p>
            <p>Shallow-marine</p>
            <p>200 Ha</p>
          </div>
        </div>
      </SubMenu>

      <SubMenu className={classname('subMenu', className)} icon={<Icon kind="bar-chart-2" />} label="Data" defaultOpen>
        <div className="summaryContentColumn">
          <CoverExtentGraph />
          <SpeciesCompositionChart labels={['Thalassia hemprichii', 'Enhalus acoroides', 'Halodule uninervis']} />
        </div>
      </SubMenu>

      <SubMenu
        className={classname('subMenu', className)}
        icon={<Icon kind="archive" />}
        label="Seagrass Threats in the Area"
        defaultOpen>
        <div className="summaryContent">Top 5 threats, fetch from DB</div>
      </SubMenu>
    </>
  )
}

export default SeagrassPanel
